export default function Contacts(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

