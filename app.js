const app = new Vue({
    el: "#app",
    data: {
      restaurantName: "On Mange VueJS",
      adress: "2022 rue de JavaScript, Villeneuve d'Ascq",
      mail: "hello@onMangeVueJS.fr",
      tel: "0618765361",
      shoppingCart : 0,
      favoriteCouleur: "bleue",
      carte: [
        {
          menu: "burger",
          cost: 8,
          image: {
            url: "https://th.bing.com/th/id/OIP.UaJCV61FLn_saaq_J1yyDAHaDt?w=345&h=174&c=7&r=0&o=5&pid=1.7",
            alt: "burger",
          },
          inStock: true,
          quantity: 1,
        },
        {
          menu: "pizza",
          cost: 7,
          image: {
            url: "https://th.bing.com/th/id/OIP.aplTNzYlcftS3lhNnQAhAgHaEK?w=328&h=185&c=7&r=0&o=5&pid=1.7",
            alt: "pizza",
          },
          inStock: false,
          quantity: 1,
        },
        {
          menu: "naan",
          cost: 6,
          image: {
            url: "https://th.bing.com/th/id/OIP.u3lsZ28llTzqTEeBRYTaXwHaE7?w=260&h=180&c=7&r=0&o=5&pid=1.7",
            alt: "naan",
          },
          inStock: true,
          quantity: 1,
        },
        {
          menu: "kebab",
          cost: 8,
          image: {
            url: "https://th.bing.com/th/id/OIP.oXGe3P4iqXqnp_DJZuPL7QAAAA?w=200&h=180&c=7&r=0&o=5&pid=1.7",
            alt: "kebab",
          },
          inStock: true,
          quantity: 1,
        },
      ],
    },
    methods: {
      addToShoppingCart(amount) {
        this.shoppingCart += amount;
      },
    },
    computed: {
      prixTotal() {
        let total = 0;
        this.carte.forEach((item) => {
          total += item.cost;
        });
        return total;
      },
    },
  });