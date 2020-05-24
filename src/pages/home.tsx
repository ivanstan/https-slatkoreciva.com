import React from 'react';
import styled from "styled-components";
import { Blog } from "../services/BlogService";
import Each from "react-each";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-family: 'Yellowtail', cursive;
  color: ${props => props.theme.darkBrand};
  text-align: center;
`;

const Card = styled.article`
  width: calc(33% - 20px);
  flex-grow: 1;
  margin: 10px;
`;

const Header = styled.header`
  height: 300px;
  background: ${props => props.theme.defaultBrand};
`;

const Aside = styled.aside`
  background: url('images/kartice.png') no-repeat;
  background-size: contain;
  position: relative;
`;

const TitleCards = styled.h2`
  font-family: 'Yellowtail', cursive;
  transform: rotate(-15deg);
  position: absolute;
  top: 50px;
  left: 25px;
`;

const TextCards = styled.p`
  font-family: monospace;
  position: relative;
  top: 129px;
  text-align: center;
  font-weight: bold;
`;

const Arrow = styled.div`
    background: url(images/arrow.png) no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    transform: rotate(50deg);
    right: -20px;
    position: absolute;
`;

const Roses = styled.div`
    background: url(images/roses.jpg) no-repeat;
    width: 400px;
    height: 500px;
`;

const Me = styled.div`
    background: url(images/me.jpg) no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
    border-radius: 100px;
`;

export class Home extends React.Component<any, any> {

    readonly state = {
        posts: []
    };

    componentDidMount(): void {
        Blog.getCollection().then((posts: any) => {
            this.setState({ posts: posts })
        })
    }

    public getDate(data: any) {
        const date = new Date(data.value)

        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    public render() {
        const { posts } = this.state;

        return <>
            <Header className="mb-5">
                <Title>Slatkorečiva</Title>
            </Header>

            <div className="container mb-5">
                <Each items={posts} renderItem={(article: any, index: number) => (
                    <article className="mb-5" key={index}>
                        <span className="text-muted">{this.getDate(article.created[0])}</span>
                        <Link to={'post/' + article.nid[0].value}>
                            <h2 className="h4">{article.title[0].value}</h2>
                        </Link>
                        {article.body[0].summary}
                    </article>
                )}/>
            </div>
        </>;
    }
}
