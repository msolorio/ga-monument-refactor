function Article(props) {
  return (
    <article>
      <h3>{props.date}</h3>
      <h2>{props.title}</h2>
      {props.children}
    </article>
  );
}

export default Article;