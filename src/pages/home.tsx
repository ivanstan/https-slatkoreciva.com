import React from 'react';
import styled from "styled-components";
import Each from "react-each";
import {Cards} from "../services/cards";

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

export class Home extends React.Component<any, any> {

  public render() {
    return <div className="container mb-5">
      <Title>Slatkorečiva</Title>
      <section className="row">
        <aside className="col-md-3">
        </aside>
        <main className="col-md-9 d-flex flex-wrap">
          <Each items={Cards.getLatest(9)} renderItem={(item: string, index: number) => (
            <Card key={index}>
              <img src={item} width="100%" alt={item} />
            </Card>
          )} />
        </main>
      </section>
      </div>;
  }
}
