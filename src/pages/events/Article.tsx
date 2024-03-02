import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import articles from './articles.json' with {type: 'json'};
import WindowCard from '../../layout/WindowCard';
import './Article.css';

interface ArticleProps {
  title: string;
  body: string;
  imgSrc?: string;
}

function Article() {
  const { articleLink } = useParams();
  const [content, setContent] = useState<ArticleProps>();

  useEffect(() => {
    setContent(articles[articleLink!]);
  }, [articleLink]);

  return (
    <div className='article'>
      {
        content && <>
          <h1>{content.title}</h1>

          {/* { render only if there's an image } */}
          {
            content.imgSrc && <div className='article-img-container'>
              <WindowCard
                content={<img src={content.imgSrc}></img>}
              ></WindowCard>
            </div>
          }

          <section>
            <div className='whitespace-pre-wrap'>{content.body}</div>
          </section>

        </>
      }
    </div>
  );
}

export default Article;
