export default function Skills() {
  return (
    <main className="container">
      <h1>Skills</h1>

      {/* Languages */}
      <section>
        <h2>Languages</h2>
        <div className="card">Python</div>
        <div className="card">PHP</div>
        <div className="card">JavaScript</div>
        <div className="card">HTML5</div>
        <div className="card">CSS3</div>
        <div className="card">jQuery</div>
      </section>

      {/* Frameworks */}
      <section>
        <h2>Frameworks & Libraries</h2>
        <div className="card">Laravel</div>
        <div className="card">Vue.js</div>
        <div className="card">Magento</div>
        <div className="card">Next JS</div>
      </section>

      {/* Databases */}
      <section>
        <h2>Databases</h2>
        <div className="card">MySQL</div>
        <div className="card">SQL Server</div>
      </section>

      {/* Tools */}
      <section>
        <h2>Tools & Technologies</h2>
        <div className="card">Docker</div>
        <div className="card">Git</div>
        <div className="card">Postman</div>
        <div className="card">Webflow</div>
        <div className="card">Bitbucket</div>
        <div className="card">SmartGit</div>
        <div className="card">Jupyter</div>
      </section>

      {/* Other */}
      <section>
        <h2>Other Skills</h2>
        <div className="card">Agile / Scrum</div>
        <div className="card">API Development</div>
        <div className="card">CI/CD</div>
      </section>
    </main>
  );
}