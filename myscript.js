// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.





new Vue({
    el: '#app',
    data: {
        emails: [],
       newEmail:[],

    },
    mounted() {
       const loopTimes = 10
       this.loading = true;
        for (let i = 0; i < loopTimes; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    setTimeout(() => {
                        this.emails.push(resp.data.response);
                        // console.log(resp);
                        // let casual = Math.floor(Math.random() * this.email.length);
                        // this.randomEmail.push(casual);

                        //QUESTA PARTE DA RIVEDERE 

                        if (this.emails.length === loopTimes) {
                            this.newEmail.push(...this.emails);
                            
                        }
                    },Math.ceil(Math.random() * 3000));
                  
                    this.loading = true;

                })

        }
        // this.newEmail = this.emails


    },
})

