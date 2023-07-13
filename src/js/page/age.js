if(!pages) var pages = {}

pages['age'] = {
    template: `
    <div>
        <div class="card-body">
            <h5 class="card-title">Wie alt bin ich?</h5>
            <p class="card-text">
                <input type="number" min="1" max="31" v-model="day" />
                <input type="number" min="1" max="12" v-model="month" />
                <input type="number" min="1900" v-model="year" />
            </p>
            <p>
                <input type="number" disabled v-model="days" /> Tage
            </p>
        </div>
    </div>`,
    data() {
        return {
            day: 13,
            month: 12,
            year: 1989,
        }
    },
    computed: {
        milliseconds(){
            return new Date().getTime() - new Date(this.year, this.month - 1, this.day).getTime()
        },
        seconds(){
            return this.milliseconds / 1000
        },
        minutes(){
            return this.seconds / 60
        },
        hours(){
            return this.minutes / 60
        },
        days(){
            return this.hours / 24
        }
    },
    watch: {
        days(){
            this.$store.commit('increment')
        }
    }
}