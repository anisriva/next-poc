import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
export default function Home() {
  const updates = [
    {id : 1, msg : "New product launch"},
    {id : 2, msg : "Fireside talk by CEO"},
    {id : 3, msg : "New office building opening"},
  ];
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
      <div key="view-ticket-button" className="flex  items-center justify-center">
        <Link href={"/tickets"}>
          <Button className="bg-secondary-500">View tickets</Button>
        </Link>
      </div>
      <div key="view-news" className="flex items-center justify-center flex-col gap-10 rounded-md bg-zinc-800 p-10 mt-10">
        {updates.map((update) => (
          <Link href={`/news/${update.id}`}>
            <Card key={update.id} className="w-[90%] bg-secondary-100 p-1">
              <CardHeader>{update.msg}</CardHeader>
              <Divider />
              <CardBody>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis quia quidem.
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
