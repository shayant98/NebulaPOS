import { PrismaClient } from ".prisma/client";
import { useState } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import CardList from "../modules/giftcard/CardList/CardList";
import CardModal from "../modules/giftcard/CardModal/CardModal";
import db from "../utils/db";

const giftcard = ({ giftcards, customers }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGiftcard, setSelectedGiftcard] = useState(0);

  const handleClick = (value) => {
    setSelectedGiftcard(value);
    setShowModal(true);
  };

  return (
    <PageContainer>
      <h2 className="mb-10 text-6xl">Giftcards</h2>
      <CardList giftcards={giftcards} onClick={handleClick} />
      <CardModal showModal={showModal} setShowModal={setShowModal} selectedGiftcard={selectedGiftcard} customers={customers} />
    </PageContainer>
  );
};

export const getServerSideProps = async (ctx) => {
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
