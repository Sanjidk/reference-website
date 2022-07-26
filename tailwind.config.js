module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'back-pic': "url('/src/img/pic.png')",
      }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary:"#570DF8",
          secondary:"#F000B8",
          accent:"#37CDBE",
          neutral:"#3D4451",
          success:"#36D399",
          warning:"#FBBD23",
          error:"#F87272",
          "base-100":"#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
