  export default function App() {
    const name = "React Beginner";
    const firstName = "Floyd";
    // this is a comment
    const newParagraph = <p>I am 19 years old and my favorite food is Chips</p>;
  
    return (
      <>
        <div>
          <h1>Welcome {name} </h1>
          {/* this is a comment */}
          <h2>My first name is {firstName} </h2>
          {newParagraph}
          <p>Welcome to React!</p>
        </div>
  
        <div>
        </div>
      </>
    );
  }

