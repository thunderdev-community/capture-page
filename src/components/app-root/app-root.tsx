import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  private form: {
    name: string;
    email: string;
    subject: string;
    description: string;
  }

  handleFormChange(e: any) {
    this.form[e.target.name] = e.target.value;
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    const response = await fetch('https://procy6q72e.execute-api.us-east-1.amazonaws.com/Deploy', {
      method: 'POST',
      body: JSON.stringify(this.form),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response);
  }

  componentWillLoad() {
    this.form = {
      name: '',
      email: '',
      subject: '',
      description: ''
    }
  }

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
              <input
                type="text"
                name='name'
                placeholder='Name'
                onChange={(e) => this.handleFormChange(e)}
                value=""
              />
              <input
                type="email"
                name='email'
                placeholder='Email'
                onChange={(e) => this.handleFormChange(e)}
                value=""
              />
              <input
                type="text"
                name='subject'
                placeholder='Subject'
                onChange={(e) => this.handleFormChange(e)}
                value=""
              />
              <textarea
                name="description"
                id="desc"
                cols={30}
                rows={10}
                placeholder='Send your idea to us :D'
                onChange={(e) => this.handleFormChange(e)}
              ></textarea>
              <input type="submit" onClick={(e) => this.handleSubmit(e)} value='Send'/>
            </form>
          </section>
        </main>,

        <footer></footer>
    ];
  }
}
