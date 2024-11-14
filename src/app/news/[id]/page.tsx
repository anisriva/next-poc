import { getNewById } from "@/app/services/news";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function News({ id }: { id: String }) {
  const news = getNewById(id);
  return (
    <>
      <Card>
        <CardHeader>{news.title}</CardHeader>
        <CardBody>{news.body}</CardBody>
      </Card>
    </>
  );
}
