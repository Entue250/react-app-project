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

// import Form from "./components/Form";
// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// Expense List Tracker Project
// import { useState } from "react";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import ProductList from "./components/ProductList";
// function App() {
//   const [category, setCategory] = useState("");
//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       {<ProductList category={category} />}
//     </div>
//   );
// }

import { CanceledError } from "./services/api-client";
import { useEffect, useState } from "react";
import userService, { User } from "./services/user-service";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // get -> await promise -> res / err

    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Eduard" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
