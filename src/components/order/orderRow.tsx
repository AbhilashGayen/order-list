import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

//Context
import { DataContext } from "../../utils/dataContext";

//Style imports
import { Checkbox, Select, Text, Avatar, Heading } from "@chakra-ui/core";
import { RowContainer } from "../../styles/orderStyles";

//Components
import TableHeader from "./tableHeader";

//Local Interface
interface FilterProps {
  filter: string;
}

//Order Data
export const useData = () => useContext(DataContext);

//Set status value and background
//returns Select Component for status
const StatusSelector = (props: any) => {
  //set intital states
  const [status, setStatus] = useState(props.status);
  const [bgcolor, setbgcolor] = useState(
    status === "Paid" ? "#39C38E" : "#FEA801"
  );

  //add reference
  const statusSelector = useRef() as React.MutableRefObject<HTMLSelectElement>;

  //update background and value on user selection
  const changeStatus = () => {
    let selectedStatus = statusSelector.current.value;
    setStatus(selectedStatus);
    setbgcolor(selectedStatus === "Paid" ? "#39C38E" : "#FEA801");
  };

  //status dropdown element
  return (
    <Select
      isTruncated
      backgroundColor={bgcolor}
      borderColor={bgcolor}
      color="white"
      defaultValue={status}
      onChange={changeStatus}
      ref={statusSelector}
    >
      <option value="Paid">Paid</option>
      <option value="Authorized">Authorized</option>
    </Select>
  );
};

//set fulfillment value and background
//returns Select Component for fulfillment
const FulfilmentSelector = (props: any) => {
  //set initial state
  const [fulfillment, setStatus] = useState(props.fulfillment);
  const [bgcolor, setbgcolor] = useState("");

  //adding reference to fulfilment dropdown
  const fulfillmentSelector = useRef() as React.MutableRefObject<
    HTMLSelectElement
  >;

  //callback to set fulfillment bg color
  const setFulfillmentColor = useCallback(
    (fulfillment: string) => {
      switch (fulfillment) {
        case "Fulfilled":
          setbgcolor("#39C38E");
          break;
        case "Unfulfilled":
          setbgcolor("#FEA801");
          break;
        case "Pending Receipt":
          setbgcolor("#8D39C3");
          break;
        default:
          setbgcolor("#39C38E");
      }
    },
    [setbgcolor]
  );

  //set bg color for fulfillment
  useEffect(() => {
    setFulfillmentColor(fulfillment);
  }, [setFulfillmentColor, fulfillment]);

  //update fulfillment value on user selection
  const changeFulfillment = () => {
    const selectedFulfillment = fulfillmentSelector.current.value;
    setStatus(selectedFulfillment);
  };

  //fulfillment dropdown element
  return (
    <Select
      isTruncated
      backgroundColor={bgcolor}
      borderColor={bgcolor}
      color="white"
      defaultValue={fulfillment}
      onChange={changeFulfillment}
      ref={fulfillmentSelector}
    >
      <option value="Fulfilled">Fulfilled</option>
      <option value="Unfulfilled">Unfulfilled</option>
      <option value="Pending Receipt">Pending Receipt</option>
    </Select>
  );
};

//format invoice id to -> xxx xxx
//return text component with invoice date
const InvoiceFormatter = (props: any) => {
  const invoiceId = props.invoiceId.toString();
  const invoiceFirst = invoiceId.slice(0, 3);
  const invoiceLast = invoiceId.slice(3, 6);
  const formattedInvoiceId = invoiceFirst + " " + invoiceLast;

  return (
    <Heading as="h6" color="blue.500" size="md">
      {formattedInvoiceId}
    </Heading>
  );
};

//Compare date with current date and return today/yesterday
//TODO: convert date format from dd/mm/yyyy to MMM DD, YYYY
const DateFormatter = (props: any) => {
  let date = props.date;

  const ddmmyyyy = date.split("/");
  const invoice_dd: number = parseInt(ddmmyyyy[0]);
  const invoice_mm: number = parseInt(ddmmyyyy[1]);
  const invoice_yyyy: number = parseInt(ddmmyyyy[2]);

  const today = new Date();
  const today_dd: number = parseInt(String(today.getDate()).padStart(2, "0"));
  const today_mm: number = parseInt(
    String(today.getMonth() + 1).padStart(2, "0")
  ); //January is 0!
  const today_yyyy: number = today.getFullYear();
  const yesterday_dd = today_dd - 1;

  const monthName = (invoice_mm: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month: string = months[invoice_mm - 1];
    return month;
  };

  if (invoice_yyyy === today_yyyy && invoice_mm === today_mm) {
    if (invoice_dd === today_dd) {
      date = "Today";
    } else if (invoice_dd === yesterday_dd) {
      date = "Yesterday";
    } else {
      const invoice_MMM = monthName(invoice_mm);
      date = `${invoice_MMM} ${invoice_dd}, ${invoice_yyyy}`;
    }
  } else {
    const invoice_MMM = monthName(invoice_mm);
    date = `${invoice_MMM} ${invoice_dd}, ${invoice_yyyy}`;
  }

  return <Text fontSize="lg">{date}</Text>;
};

const OrderRow = ({ filter }: FilterProps) => {
  const { orderData } = useData()!;
  const [filteredData, setFilteredData] = useState(orderData);

  //set filter data
  useEffect(() => {
    setFilteredData(orderData);
    if (filter === "unpaid") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.status.toLowerCase().includes("authorized")
        )
      );
    } else if (filter === "unfulfilled") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.fulfillment.toLowerCase().includes("unfulfilled")
        )
      );
    } else if (filter === "active") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.fulfillment.toLowerCase().includes("pending receipt")
        )
      );
    }
  }, [filter, orderData]);

  return (
    <>
      <TableHeader />
      {filteredData.map((filteredName) => (
        <RowContainer key={filteredName.order_id}>
          <div className="cell checkbox">
            <Checkbox border="1px" borderRadius="md" borderColor="gray.200" />
          </div>
          <div className="cell order_id">
            <InvoiceFormatter invoiceId={filteredName.order_id} />
          </div>
          <div className="cell created_date">
            <DateFormatter date={filteredName.created_date} />
          </div>
          <div className="cell customer">
            <Avatar
              showBorder
              name={filteredName.customer_first_name}
              src={filteredName.customer_avatar}
            />
            <Text isTruncated pl={2}>
              {filteredName.customer_first_name +
                " " +
                filteredName.customer_last_name}
            </Text>

            {/* <p>
              {filteredName.customer_first_name +
                " " +
                filteredName.customer_last_name}
            </p> */}
          </div>
          <div className="cell fulfillment">
            <FulfilmentSelector fulfillment={filteredName.fulfillment} />
          </div>
          <div className="cell total">
            <Text fontSize="lg">{filteredName.amount_total}</Text>
          </div>
          <div className="cell profit">
            <Text fontSize="lg">{filteredName.amount_profit}</Text>
          </div>
          <div className="cell status">
            <StatusSelector status={filteredName.status}></StatusSelector>
          </div>
          <div className="cell updated">
            <DateFormatter date={filteredName.update} />
          </div>
        </RowContainer>
      ))}
    </>
  );
};

export default OrderRow;
