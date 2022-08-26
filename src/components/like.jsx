import React, { Component } from "react";

const Like = (props) => {
  let classes = "solid-border";
  if (props.liked) classes = "solid";
  return <div onClick={props.onLiked} className={classes}></div>;
};

export default Like;
