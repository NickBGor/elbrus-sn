export const state = () => ({
  events: []
})

export const mutations = {
  updateEvents(state, events) {
    state.events = events
  },
  addEvent(state, event) {
    state.events.push(event)
  }
}

export const actions = {
  async getEvents({commit}) {
    const events = await this.$axios.get('http://elbrus.space:80/events').then(res => res.data.events)
    // return events
    commit('updateEvents', events)
  },
  async setEvent(state, event) {
    try {
      await this.$axios.post('http://elbrus.space:80/events/create', event)
        .then(res => res)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const getters = {
  events: state => state.events
}
