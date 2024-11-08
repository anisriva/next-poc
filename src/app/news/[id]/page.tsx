interface PageProps {
  params: {
    id: string;
  };
}

const updates = {
  "1" : "New product launch",
  "2" : "Fireside talk by CEO",
  "3" : "New office building opening"
}

export default function Page({ params }: PageProps) {
  const { id } = params;
  return (
    <h1>
        {updates[id]}
    </h1>
  );
}
