import React from 'react';
import styled from "styled-components";
import Each from "react-each";
import {Cards} from "../services/cards";
import ScrollAnimation from 'react-animate-on-scroll';

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

  public render() {
    return <>
      <Header className="mb-5">
        <Title>Slatkorečiva</Title>
      </Header>
      <div className="container mb-5">

        <section className="row mb-5">

          <Roses className={"col-md-4"}/>

          <div className={"col-md-4"}>
          <Me />
          </div>

        </section>

      <section className="row">
        <Aside className="col-md-3">
          <TitleCards>Motivacijske kartice</TitleCards>
          <TextCards>Svakog dana uz kafu umesto kockice šećera.</TextCards>
          <Arrow />
        </Aside>
        <main className="col-md-9 d-flex flex-wrap">
          <Each items={Cards.getLatest(9)} renderItem={(item: string, index: number) => (
            <Card key={index}>
              <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut"
                               delay={(index / 3 * 300)}>
                <img src={item} width="100%" alt={item} />
              </ScrollAnimation>
            </Card>
          )} />
        </main>
      </section>
      </div>
    </>;
  }
}
