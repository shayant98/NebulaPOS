import { PrismaClient } from ".prisma/client";
import { getSession, useSession } from "next-auth/client";
import { useState } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import CardList from "../modules/giftcard/CardList/CardList";
import CardModal from "../modules/giftcard/CardModal/CardModal";
import db from "../utils/db";

const giftcard = ({ giftcards, customers }) => {
  const { data: session, status } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [selectedGiftcard, setSelectedGiftcard] = useState(0);

  const handleClick = (value) => {
    setSelectedGiftcard(value);
    setShowModal(true);
  };

  return (
    <PageContainer title="Giftcards">
      <CardList giftcards={giftcards} onClick={handleClick} />
      <CardModal showModal={showModal} setShowModal={setShowModal} selectedGiftcard={selectedGiftcard} customers={customers} />
    </PageContainer>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const prisma = db;

  const giftcards = await prisma.giftcard.findMany({});
  const customers = await prisma.customers.findMany({ select: { id: true, surname: true, name: true, email: true } });

  return {
    props: {
      giftcards,
      customers,
    },
  };
};

export default giftcard;
