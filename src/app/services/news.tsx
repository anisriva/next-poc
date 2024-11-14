interface NewsProps {
  id: String;
  title: String;
  body: String;
}

async function getNews(): Promise<Array<NewsProps>> {
  const res = await fetch("http://127.0.0.1:4000/news");
  return res.json();
}

async function getNewById(id: String): Promise<NewsProps> {
  const res = await fetch(`http://127.0.0.1:4000/news/${id}`);
  return res.json();
}

export { getNews, getNewById };
