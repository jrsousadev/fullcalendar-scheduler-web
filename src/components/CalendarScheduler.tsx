import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export const CalendarScheduler = () => {
  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const handleEventSelectAndOpenModal = () => {};

  return (
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
      select={() => {}}
      eventClick={() => {}}
      eventChange={() => {}}
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
  );
};
