import React from "react";

function PageLink({ id, href, itemClass, text }) {
  return (
    <li key={id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
}

export default PageLink;
