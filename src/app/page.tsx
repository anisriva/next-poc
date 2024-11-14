import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Chip,
} from "@nextui-org/react";
import Link from "next/link";
import { getTickets } from "./services/tickets";

export default async function Home() {
  const tickets = await getTickets();
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nisi
        dolorem repudiandae ad, ipsam optio, repellendus fuga, ipsum ullam
        cupiditate fugiat at deserunt odit quasi nobis itaque molestias ipsa
        dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dignissimos laborum neque, suscipit, pariatur vitae explicabo quasi nam
        totam consectetur dolor accusantium a quidem laboriosam quod modi ipsa
        illo molestiae. Illo!
      </p>
      <hr />
      <div
        key="view-ticket-button"
        className="flex  items-center justify-center"
      >
        <Link href={"/tickets"}>
          <Button className="bg-secondary-500">View tickets</Button>
        </Link>
      </div>
      <div
        key="view-news"
        className="flex flex-col rounded-md bg-zinc-800 m-10 gap-10 p-10 justify-center items-center"
      >
        {tickets.map((ticket) => (
          <Link key={ticket.id} href={`/news/${ticket.id}`}>
            <Card
              key={Number(ticket.id)}
              className="w-[90%] bg-secondary-100 mx-auto "
            >
              <CardHeader className="text-lg font-extrabold justify-center">
                {ticket.title}
              </CardHeader>
              <Divider />
              <CardBody>{ticket.body}</CardBody>
              <Divider />
              <CardFooter className="flex justify-between">
                <Chip variant="faded">{ticket.priority}</Chip>
                <Chip variant="bordered">{ticket.user_email}</Chip>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
