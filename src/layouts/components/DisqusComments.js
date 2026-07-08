"use client";

import config from "@config/config.json";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = () => {
  const { disqus } = config;

  if (!disqus.enable) return null;

  return (
    <DiscussionEmbed
      shortname={disqus.shortname}
      config={disqus.settings}
    />
  );
};

export default DisqusComments;
