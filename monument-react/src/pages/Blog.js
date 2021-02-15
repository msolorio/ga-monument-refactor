import NavBar from '../components/NavBar';
import '../css/blog.css';
import blog1 from '../images/blog_1.jpg';
import blog2 from '../images/blog_2.jpg';
import about from '../images/about.jpg';

function Blog() {
  return (
    <>
      <header class="vertical-center header-blog">
        <div>
          <h1><a href="index.html">Monument</a></h1>
        </div>
      </header>
      
      <NavBar />

      <div className="wrap grid-wrapper">
        <section>
          <article>
            <h3>11/23/2016</h3>
            <h2>A Visual Guide to the Southwest</h2>
            <img src={blog1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!</p>
            <img src={blog2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!</p>
          </article>
        </section>

        <aside>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.</p>
          <p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
          <img src={about} alt="" />
          <h3>Recent Issues</h3>
          <ul>
            <li><a href="/">Issue Nineteen &mdash; Camping</a></li>
            <li><a href="/">Issue Eighteen &mdash; Food</a></li>
            <li><a href="/">Issue Seventeen &mdash; Signs</a></li>
            <li><a href="/">Issue Sixteen &mdash; Friends</a></li>
            <li><a href="/">Issue Fifteen &mdash; Carnivals</a></li>
            <li><a href="/">Issue Fourteen &mdash; Gatherings</a></li>
          </ul>
        </aside>
      </div>

      <section className="comment">
        <div className="wrap">
        <h2>Leave a Comment</h2>
          <form>
            <input type="text" placeholder="Name" className="col-half" />
            <input type="email" placeholder="Email" className="col-half" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog;
