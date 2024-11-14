import { TicketProps } from "./types";
import { getTickets } from "../services/tickets";

export default async function TicketList() {
  const tickets: Array<TicketProps> = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={Number(ticket.id)}>{ticket.title}</div>
      ))}
    </>
  );
}
