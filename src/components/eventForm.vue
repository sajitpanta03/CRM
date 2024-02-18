<template>
  <div>
    <label for="event">Your Customer: </label>
    <q-input rounded filled v-model="store.customerName" label="Name" /><br />
    <q-input rounded filled v-model="store.userId" label="UserId" /><br />
    <q-input rounded filled v-model="store.email" label="Email" /><br />
    <q-input rounded filled v-model="store.timezone" label="Timezone" /><br />
    <div class="q-gutter-md row items-start">
      <q-date v-model="store.model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="store.model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
    <br />
    <q-btn
      @click="store.addEvent()"
      color="green"
      icon-right="add"
      label="Add Customer Detail"
    />
    &nbsp;
    <q-btn @click="store.editEvent(index)" icon="edit" color="primary" />

    <div v-for="(event, index) in store.eventsWithMessages" :key="index">
      <div><strong>Customer Name:</strong> {{ event.event }}</div>
      <div><strong>Date:</strong> {{ event.message }}</div>
      <div><strong>User ID:</strong> {{ event.userId }}</div>
      <div><strong>Email:</strong> {{ event.email }}</div>
      <div><strong>Timezone:</strong> {{ event.timezone }}</div>
      <div>
        <q-btn @click="editEvent(index)" icon="edit" color="primary" />
        <q-btn
          @click="store.deleteEvent(index)"
          icon="delete"
          color="negative"
        />
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { useEventStore } from "../stores/eventStore";
import { watchEffect } from "vue";

const store = useEventStore();

const editEvent = (index) => {
  const eventToEdit = store.eventsWithMessages[index];
  store.customerName = eventToEdit.event;
  store.userId = eventToEdit.userId;
  store.email = eventToEdit.email;
  store.timezone = eventToEdit.timezone;
  store.editingIndex = index;
};

watchEffect(() => {
  console.log("Store data changed:", store.eventsWithMessages);
});
</script>
