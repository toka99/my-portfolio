export default function About() {
  return (
    <main className="container">
      <h1>About Me</h1>

      <p>
        Software Engineer with strong expertise in backend development, 
      </p>
      <p>
        specializing in designing and building scalable, secure APIs.
      </p>
      <p>
        Experienced in integrating services across systems and delivering high-performance solutions.
      </p>
      <p>
        Committed to writing clean, maintainable code and following best practices in software design.
      </p>
      

      <h2>Experience</h2>

      <div className="card">
        <h3>Chayah Group</h3>
        <p>2024 – 2025</p>
        <p>
          Developed and maintained backend systems using PHP, improving overall server performance.  
        </p>
        <p>
          Designed and implemented APIs to ensure reliable data flow between services,
        </p>
        <p>
          and optimized database queries to enhance application speed and efficiency.
        </p>
        <p>
          Also contributed to establishing a structured Git workflow to streamline team development processes.
        </p>
        
      </div>

      <div className="card">
        <h3>Nweave LLC</h3>
        <p>2021 – 2023</p>
        <p>
          Led end-to-end full-stack development of scalable web applications using Laravel, Vue.js, and Docker,
        </p>
        <p>
          significantly improving system performance and development speed. Built and maintained robust backend architectures, 
        </p>
        <p>
          developed custom modules and plugins, and conducted code reviews to ensure high code quality.
        </p>
        <p>
          Played a key role in enhancing user experience and achieving a 95% on-time project delivery rate.
        </p>
      </div>

      <h2>Education</h2>

<div className="card">
  <h3>Master’s in Computer Science (Ongoing)</h3>
  <p>Faculty of Science, Alexandria University</p>
  <p>Specialization: Computer Science</p>
</div>

<div className="card">
  <h3>Professional Diploma in Open-Source Application Development</h3>
  <p>Information Technology Institute (ITI)</p>
  <p>2021 – 2022</p>
</div>

<div className="card">
  <h3>Bachelor of Science in Computer Science</h3>
  <p>Alexandria University</p>
  <p>2016 – 2020</p>
  <p>CGPA: 3.29 / 4 (Very Good)</p>
</div>

    </main>
  );
}