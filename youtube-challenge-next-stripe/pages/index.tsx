import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from 'next/link';

import stripeConfig from '../config/stripe';

interface Props {
  skus: Stripe.Sku[];
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
      apiVersion: '2020-08-27',
  });

  const skus = await stripe.skus.list();

  return {
    props: {
      skus: skus.data,
    }
  }
}

const HomePage: React.FC<Props> = ({ skus }) =>  {
  return (
    <>
      <h1>Simple Stripe Store</h1>

      <hr/>

      {skus.map(sku => (
        <div key={sku.id}>
          <h1>{sku.attributes.name}</h1>

          {sku.image && <img src={sku.image} style={{ width: '100px', }}/>}

          <h2>{Number(sku.price/100).toFixed(2)} {sku.currency.toUpperCase()}</h2>

          <Link href={'/' + sku.id}>Visit Page</Link>
          
          <hr/>
        </div>
      ))}
    </>
  )
}