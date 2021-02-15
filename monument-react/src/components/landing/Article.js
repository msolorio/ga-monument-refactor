function Article(props) {
  return (
    <article className="col-third">
      <img src={props.image} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <button>Read More</button>
      </div>
    </article>
  );
}

export default Article;