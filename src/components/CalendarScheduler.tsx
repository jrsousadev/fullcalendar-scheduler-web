import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import { ModalInfosEventCalendar } from "./ModalInfosEventCalendar";
import { useDisclosure } from "../hooks/useDiscloure";
import { useState } from "react";
import { ContainerCalendar } from "./styles";
import { updateEventCalendar } from "../services/eventCalendarApi";
import { toast } from "react-toastify";

export const CalendarScheduler = () => {
  const [eventInfos, setEventInfos] = useState();
  const [isEditCard, setIsEditCard] = useState<boolean>(false);

  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const modalInfosEvent = useDisclosure(false);

  const handleAddEventSelectAndOpenModal = (selectInfo) => {
    setEventInfos(selectInfo);
    setIsEditCard(false);
    modalInfosEvent.handleOpen();
  };

  const handleEditEventSelectAndOpenModal = (clickInfo) => {
    setEventInfos(clickInfo);
    setIsEditCard(true);
    modalInfosEvent.handleOpen();
  };

  const handleUpdateEventSelect = async (changeInfo) => {
    try {
      const eventCalendarUpdated = {
        eventCalendar: {
          _id: changeInfo.event.id,
          title: changeInfo.event.title,
          start: changeInfo.event.startStr,
          end: changeInfo.event.endStr,
          backgroundColor: changeInfo.event.backgroundColor,
          textColor: changeInfo.event.textColor,
        },
      };

      await updateEventCalendar(eventCalendarUpdated);
    } catch (err) {
      toast.error('Houve um erro ao atualizar o evento');
    }
  };

  return (
  <ContainerCalendar>
      <ModalInfosEventCalendar
        open={modalInfosEvent.isOpen}
        handleClose={modalInfosEvent.handleClose}
        eventInfos={eventInfos}
        isEditCard={isEditCard}
      />

    <FullCalendar
      plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      locale="pt-br"
      weekends={weekends.weekendsVisible}
      select={handleAddEventSelectAndOpenModal}
      eventClick={handleEditEventSelectAndOpenModal}
      eventChange={handleUpdateEventSelect}
      initialEvents={[]}
      longPressDelay={1000}
      eventLongPressDelay={1000}
      selectLongPressDelay={1000}
      selectable={true}
      dayMaxEvents={true}
      allDaySlot={false}
      editable={true}
      height="700px"
      buttonText={{
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia",
        list: "Lista",
      }}
    />
  </ContainerCalendar>
  );
};
