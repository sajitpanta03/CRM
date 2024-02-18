import { defineStore } from "pinia";
import { ref } from "vue";

export const useEventStore = defineStore("event", () => {
  const customerName = ref([]);
  const userId = ref([]);
  const email = ref([]);
  const timezone = ref([]);
  const eventsWithMessages = ref([]);
  const model = ref([]);

  const addEvent = () => {
    if (customerName.value.trim() !== "") {
      eventsWithMessages.value.push({
        event: customerName.value,
        message: model.value,
        userId: userId.value,
        email: email.value,
        timezone: timezone.value,
      });
      customerName.value = "";
      userId.value = "";
      email.value = "";
      timezone.value = "";
    }
  };

  const editEvent = (index) => {
    const editData = { ...eventsWithMessages.value[index] };
    customerName.value = editData.event;
    userId.value = editData.userId;
    email.value = editData.email;
    timezone.value = editData.timezone;

    const updatedEvents = [...eventsWithMessages.value];
    updatedEvents[index] = editData;
    eventsWithMessages.value = updatedEvents;
  };

  const deleteEvent = (index) => {
    eventsWithMessages.value.splice(index, 1);
  };

  function CurrentDate() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    return formattedDate;
  }

  return {
    customerName,
    userId,
    email,
    timezone,
    eventsWithMessages,
    model,
    addEvent,
    editEvent,
    deleteEvent,
  };
});
