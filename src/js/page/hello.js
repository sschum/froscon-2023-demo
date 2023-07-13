if(!pages) var pages = {}

pages['hello'] = {
    template: `
    <div>
        <div class="card-body">
            <h5 class="card-title">{{ message }}</h5>
            <p class="card-text">
                <input type="text" v-model="message" />
            </p>
            <p>
                Cards: {{ cards.length }}
                Charcounter: {{ amountOfChars }}
                Average Chars: {{ averageCharsAmount }}
            </p>
            <a class="btn btn-primary" v-on:click="addCard">Add Card</a>
        </div>
    
        <div class="row">
            <div class="col-6" v-for="(card, i) of cards" :key="card.id">
                <card :css-class="i % 2 === 0 ? 'bg-primary' : 'bg-secondary'"
                      v-on:card-click="removeCard(i)">
                    {{ card.content }} ({{ card.id }})
                </card>
            </div>
        </div>
    </div>`,
    data() {
        return {
            message: 'Hello Vue!',
            cards: [],
        }
    },
    computed: {
        amountOfChars() {
            if(this.cards.length === 0) return 0

            return this.cards.map(c => c.content.length).reduce((pv, cv) => pv + cv)
        },
        averageCharsAmount() {
            if(this.amountOfChars === 0) return 0

            return this.amountOfChars / this.cards.length
        }
    },
    methods: {
        addCard() {
            this.cards.push({
                id: new Date().getTime(),
                content: this.message,
            })
        },
        removeCard(i) {
            this.cards.splice(i, 1)
        }
    },
    watch: {
        message(newValue) {
            console.log("Message changed: ", newValue)
        }
    }
}