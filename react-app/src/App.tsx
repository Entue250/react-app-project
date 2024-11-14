// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// import ListGroup from "./components/ListGroup";
// import "./App.css";
// function App() {
//   const items = ["Kigali", "New York", "San Francisco"];
//   return (
//     <div>
//       <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
//     </div>
//   );
// }
// import { BsFillCalendarFill } from "react-icons/bs";

// function App() {
//   return (
//     <div>
//       <BsFillCalendarFill color="red" size="40" />
//     </div>
//   );
// }

// import Button from "./components/Button/Button";

// function App() {
//   return (
//     <div>
//       <Button onClick={() => {}}>My button</Button>
//     </div>
//   );
// }

// import Like from "./components/Like";

// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }
// import { useState } from "react";
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";

// function App() {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// import ExpandableText from "./components/ExpandableText";
// function App() {
//   return (
//     <div>
//       <ExpandableText>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam
//         sequi magni officiis beatae voluptates repellendus totam commodi dolore,
//         voluptatem tempore qui omnis, mollitia, optio vel repudiandae ab
//         quibusdam id asperiores. In, ex provident quia facilis omnis optio vitae
//         dolorem nemo labore autem aliquam neque sapiente, alias eum corrupti
//         quibusdam ipsum quo ad quod delectus nobis? Enim nobis molestiae
//         repellat, accusamus aliquid, perspiciatis voluptas deserunt suscipit
//         quod ad atque? Accusantium expedita adipisci iure blanditiis praesentium
//         perspiciatis vitae reiciendis amet illo sunt totam delectus omnis
//         aperiam obcaecati voluptates quas, fugiat maiores necessitatibus ipsa
//         unde. Asperiores obcaecati suscipit alias eum id quam!
//       </ExpandableText>
//     </div>
//   );
// }
import Form from "./components/Form";
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}
export default App;
