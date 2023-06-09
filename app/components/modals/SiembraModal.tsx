'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

import useSiembraModal from "@/app/hooks/useSiembraModal";

import Modal from "./Modal";

import Counter from "../inputs/Counter";
import Heading from '../Heading';

enum STEPS {
  ESPECIE = 0,
  LUGAR = 1,
  ESPACIO = 2,
  LIMITES = 3,
}

const SiembraModal = () => {
  const router = useRouter();
  const siembraModal = useSiembraModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.ESPECIE);

  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });


  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.ESPECIE) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      guestCount,
      roomCount,
      bathroomCount
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({
      url: '/especies',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.ESPECIE);
    siembraModal.onClose();
    router.push(url);
  }, 
  [
    step, 
    siembraModal, 
    router, 
    guestCount, 
    roomCount,
    dateRange,
    onNext,
    bathroomCount,
    params
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.LIMITES) {
      return 'Search'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.ESPECIE) {
      return undefined
    }

    return 'Back'
  }, [step]);

  //Especie
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <hr />
    </div>
  )

  if (step === STEPS.LUGAR) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
      </div>
    )
  }

  if (step === STEPS.ESPACIO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="More information"
          subtitle="Find your perfect place!"
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Guests" 
          subtitle="How many guests are coming?"
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Rooms" 
          subtitle="How many rooms do you need?"
        />        
        <hr />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bahtrooms do you need?"
        />
      </div>
    )
  }
  if(step === STEPS.LIMITES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="What are your limits?"
          subtitle="Find the perfect place!"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={siembraModal.isOpen}
      title="SiembraGYQ"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ESPECIE ? undefined : onBack}
      onClose={siembraModal.onClose}
      body={bodyContent}
    />
  );
}

export default SiembraModal;