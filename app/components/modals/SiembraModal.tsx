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
  INTRO = 0,
  ESPECIE = 1,
  LUGAR = 2,
  ESPACIO = 3,
  LIMITES = 4,
}

const SiembraModal = () => {
  const router = useRouter();
  const siembraModal = useSiembraModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.INTRO);

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
    if (step !== STEPS.LIMITES) {
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

    setStep(STEPS.INTRO);
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
      return 'Buscar'
    }

    return 'Siguiente'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INTRO) {
      return undefined
    }

    return 'Regresar'
  }, [step]);

  //Intro
  let bodyContent = (
    <div className="flex flex-col gap-8 my-9">
      <Heading
        title="Siembra tu Árbol"
        subtitle="Describenos tu arbol y te ayudaremos a encontrarlo"
      />
      <hr />
    </div>
  )

  if (step === STEPS.ESPECIE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Especie de Árbol"
          subtitle="Que caracteristicas tiene tu arbol?"
        />
      </div>
    )
  }

  if (step === STEPS.LUGAR) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Donde quieres sembrar?"
          subtitle="Encuentra el lugar adecuado y perfecto!"
        />
      </div>
    )
  }

  if (step === STEPS.ESPACIO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tienes suficiente espacio?"
          subtitle="Describenos el espacio que tienes disponible!"
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Ancho del area de siembra" 
          subtitle="A"
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Largo del area de siembra" 
          subtitle="B"
        />        
        <hr />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Distancia a tendido electrico"
          subtitle="C"
        />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Altura de tendido electrico"
          subtitle="D"
        />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Distancia a otras estructuras"
          subtitle="E"
        />
        
      </div>
    )
  }
  if(step === STEPS.LIMITES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Limitaciones de tu arbol"
          subtitle="Que limitaciones tiene tu arbol?"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={siembraModal.isOpen}
      title={"SiembraGYQ" + (step===0 ? "" : " - "+step+" de 4")}
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