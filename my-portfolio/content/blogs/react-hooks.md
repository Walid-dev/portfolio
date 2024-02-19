---
title: "React Hooks: Elevating Basics with Advanced Examples"
date: 2024-02-19T00:00:00+00:00
draft: false
author: "Walid"
tags:
  - Javascript
  - React
  - React Hooks
  - Frontend
  - Software Development
image: /images/react-hooks.webp
description: "A comprehensive exploration of basic React Hooks enhanced with advanced examples and insights for modern web application development."
toc: true
---

## Introduction

React Hooks offer a revolutionary approach to handling state and lifecycle features in functional components. This guide revisits the basics of React Hooks, supplemented with advanced examples to provide a deeper understanding for developers familiar with the fundamentals.

### `useState`: State Management

`useState` is the cornerstone of state management in functional components, allowing for the declaration of state variables in React.

#### Advanced Example: State with Previous Value

```jsx
const [count, setCount] = useState(0);

// Increment count based on previous value
const increment = () => {
  setCount(prevCount => prevCount + 1);
};
```

### `useEffect`: Side Effects

`useEffect` manages side effects in functional components, replacing lifecycle methods from class components.

#### Optimizing Effects

```jsx
useEffect(() => {
  // Subscription setup
  const subscription = props.source.subscribe();
  // Cleanup subscription
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]); // Only re-subscribe when props.source changes
```

### `useContext`: Simplifying Context

`useContext` allows for easy access to React context, facilitating the sharing of state across the component tree without prop drilling.

#### Example: Theme Context

```jsx
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </div>
  );
}
```

### Custom Hooks: Building Your Own

Custom Hooks allow for the extraction and reuse of stateful logic across components.

#### Example: `useFetch` for Data Fetching

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
}
```

## Conclusion

While React Hooks simplify component logic and state management, exploring advanced use cases and patterns can significantly enhance your development skills. Embrace these examples as a stepping stone to mastering React Hooks in your projects.

For a deeper dive into React Hooks and their documentation, visit the [official React documentation](https://reactjs.org/docs/hooks-intro.html).

*Illustration: An enhanced guide to basic React Hooks with advanced examples.*