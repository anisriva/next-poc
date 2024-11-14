async function getTickets() {
  const res = await fetch("http://127.0.0.1:4000/tickets", {
    next : {
      revalidate : 0
    }
  });
  return res.json();
}

async function getTicketById({ id }: { id: String }) {
  const res = await fetch(`http://127.0.0.1:4000/tickets/${id}`);
  return res.json();
}

export { getTickets, getTicketById };
