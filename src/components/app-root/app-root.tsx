import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return [
        <header>
          <span>RoadMapper</span>
        </header>,

        <main>
          <section>
            <div class="welcome">
              <h1>Learn, teach, improve yourself.</h1>
              <p>
                Learn to code like the pros, from the pros. And also help other teaching
                what you know and improve your soft skills.
              </p>
            </div>
            <form action="">
              <h2>Get in touch</h2>
              <input type="text" name='name' placeholder='Name'/>
              <input type="email" name='email' placeholder='Email'/>
              <input type="text" name='subject' placeholder='Subject'/>
              <textarea name="description" id="desc" cols={30} rows={10} placeholder='Send your idea to us :D'></textarea>
              <input type="submit" value='Send'/>
            </form>
          </section>
        </main>,

        <footer></footer>
    ];
  }
}
