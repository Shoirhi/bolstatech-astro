import React, { useEffect } from 'react';
import tocbot from 'tocbot';

export default function ArticleToc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.prose',
      headingSelector: 'h1, h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return <div className="js-toc"></div>;
}