import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";

import { createEffect, createSignal, onMount, Show } from "solid-js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={() => {
            const [chat, setChat] = createSignal(false);

            onMount(() => {
              console.log("Chat mounted");
            });

            createEffect(() => {
              console.log(chat());
              if (!chat()) {
                setChat(true);
              }
            });

            return (
              <>
                <Show when={chat()} fallback={<h1>Nope</h1>}>
                  <div>
                    <h1>shiit</h1>
                  </div>
                </Show>
              </>
            );
          }}
        ></Route>
      </Routes>
    </Router>
  );
}

render(() => <App />, document.getElementById("root"));
