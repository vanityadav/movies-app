import React, { Component } from "react";
import like from "../images/like.svg";

const Like = (props) => {
  let classes = "solid-border";
  if (props.liked) classes = "solid";
  return <img src={like} onClick={props.onLiked} className={classes}></img>;
};

export default Like;
