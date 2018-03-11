<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-subheader></v-subheader>
      </v-flex>
      <v-flex xs12 sm6>
        <v-select
        :items="stations"
        item-value="name"
        item-text="name"
        v-model="select"
        label="Police station:"        
        hide-details
        id="langSelect"
      ></v-select>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      stations: [
        {
          name: 'BOTSHABELO',
          the_geom: 'POINT (26.716060000000024 -29.23620000000003)',
          LOCATION_X: 26.71606,
          LOCATION_Y: -29.2362,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KUBUSIEDRIFT',
          the_geom: 'POINT (27.623840000000026 -32.56819000000004)',
          LOCATION_X: 27.62384,
          LOCATION_Y: -32.56819,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STUTTERHEIM',
          the_geom: 'POINT (27.427410000000027 -32.571180000000034)',
          LOCATION_X: 27.42741,
          LOCATION_Y: -32.57118,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOTHERWELL',
          the_geom: 'POINT (25.584190000000024 -33.79664000000003)',
          LOCATION_X: 25.58419,
          LOCATION_Y: -33.79664,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWADWESI',
          the_geom: 'POINT (25.523470000000025 -33.84109000000004)',
          LOCATION_X: 25.52347,
          LOCATION_Y: -33.84109,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CRADOCK',
          the_geom: 'POINT (25.625710000000023 -32.17560000000003)',
          LOCATION_X: 25.62571,
          LOCATION_Y: -32.1756,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NOENIEPUT',
          the_geom: 'POINT (20.14278000000002 -27.512940000000025)',
          LOCATION_X: 20.14278,
          LOCATION_Y: -27.51294,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INDWE',
          the_geom: 'POINT (27.335550000000023 -31.47124000000003)',
          LOCATION_X: 27.33555,
          LOCATION_Y: -31.47124,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROSSOUW',
          the_geom: 'POINT (27.279970000000024 -31.16777000000003)',
          LOCATION_X: 27.27997,
          LOCATION_Y: -31.16777,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELANDS HEIGHT',
          the_geom: 'POINT (28.22494000000003 -30.804230000000025)',
          LOCATION_X: 28.22494,
          LOCATION_Y: -30.80423,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MACLEAR',
          the_geom: 'POINT (28.348970000000026 -31.067080000000026)',
          LOCATION_X: 28.34897,
          LOCATION_Y: -31.06708,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WOLWEFONTEIN',
          the_geom: 'POINT (24.828340000000022 -33.292910000000035)',
          LOCATION_X: 24.82834,
          LOCATION_Y: -33.29291,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ADDO',
          the_geom: 'POINT (25.690290000000022 -33.547690000000024)',
          LOCATION_X: 25.69029,
          LOCATION_Y: -33.54769,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWA THEMA',
          the_geom: 'POINT (28.394380000000023 -26.278890000000025)',
          LOCATION_X: 28.39438,
          LOCATION_Y: -26.27889,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRAKPAN',
          the_geom: 'POINT (28.362570000000026 -26.234810000000024)',
          LOCATION_X: 28.36257,
          LOCATION_Y: -26.23481,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SWARTBERG',
          the_geom: 'POINT (29.338740000000026 -30.241560000000028)',
          LOCATION_X: 29.33874,
          LOCATION_Y: -30.24156,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SMITHFIELD',
          the_geom: 'POINT (26.531670000000023 -30.20976000000003)',
          LOCATION_X: 26.53167,
          LOCATION_Y: -30.20976,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VENTERSBURG',
          the_geom: 'POINT (27.136050000000022 -28.08577000000003)',
          LOCATION_X: 27.13605,
          LOCATION_Y: -28.08577,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THEUNISSEN',
          the_geom: 'POINT (26.712080000000025 -28.400420000000025)',
          LOCATION_X: 26.71208,
          LOCATION_Y: -28.40042,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THABONG',
          the_geom: 'POINT (26.780510000000024 -27.974830000000022)',
          LOCATION_X: 26.78051,
          LOCATION_Y: -27.97483,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HENDRINA',
          the_geom: 'POINT (29.71433000000003 -26.160520000000023)',
          LOCATION_X: 29.71433,
          LOCATION_Y: -26.16052,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAERSDRIFT',
          the_geom: 'POINT (29.856220000000032 -25.367660000000022)',
          LOCATION_X: 29.85622,
          LOCATION_Y: -25.36766,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARBLE HALL',
          the_geom: 'POINT (29.296870000000027 -24.969680000000025)',
          LOCATION_X: 29.29687,
          LOCATION_Y: -24.96968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WATERVAL BOVEN',
          the_geom: 'POINT (30.32545000000003 -25.644330000000025)',
          LOCATION_X: 30.32545,
          LOCATION_Y: -25.64433,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EVATON',
          the_geom: 'POINT (27.857190000000028 -26.541720000000023)',
          LOCATION_X: 27.85719,
          LOCATION_Y: -26.54172,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEIDEDAL',
          the_geom: 'POINT (26.250190000000025 -29.142420000000023)',
          LOCATION_X: 26.25019,
          LOCATION_Y: -29.14242,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOITHUSO',
          the_geom: 'POINT (26.673990000000025 -29.25967000000003)',
          LOCATION_X: 26.67399,
          LOCATION_Y: -29.25967,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLOCOLAN',
          the_geom: 'POINT (27.567980000000027 -28.916020000000028)',
          LOCATION_X: 27.56798,
          LOCATION_Y: -28.91602,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NIEUWOUDTVILLE',
          the_geom: 'POINT (19.117030000000018 -31.37425000000003)',
          LOCATION_X: 19.11703,
          LOCATION_Y: -31.37425,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SESHEGO',
          the_geom: 'POINT (29.382270000000027 -23.85429000000002)',
          LOCATION_X: 29.38227,
          LOCATION_Y: -23.85429,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MANKWENG',
          the_geom: 'POINT (29.726690000000026 -23.885060000000024)',
          LOCATION_X: 29.72669,
          LOCATION_Y: -23.88506,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KATLEHONG',
          the_geom: 'POINT (28.157100000000028 -26.361900000000027)',
          LOCATION_X: 28.1571,
          LOCATION_Y: -26.3619,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PERDEKOP',
          the_geom: 'POINT (29.621480000000023 -27.16835000000003)',
          LOCATION_X: 29.62148,
          LOCATION_Y: -27.16835,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZASTRON',
          the_geom: 'POINT (27.081670000000024 -30.304550000000027)',
          LOCATION_X: 27.08167,
          LOCATION_Y: -30.30455,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VERULAM',
          the_geom: 'POINT (31.04136000000003 -29.644740000000024)',
          LOCATION_X: 31.04136,
          LOCATION_Y: -29.64474,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MMAKAU',
          the_geom: 'POINT (27.941010000000023 -25.617400000000025)',
          LOCATION_X: 27.94101,
          LOCATION_Y: -25.6174,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LULEKANI',
          the_geom: 'POINT (31.081040000000026 -23.866490000000024)',
          LOCATION_X: 31.08104,
          LOCATION_Y: -23.86649,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLANGANANI',
          the_geom: 'POINT (30.29724000000003 -23.30664000000002)',
          LOCATION_X: 30.29724,
          LOCATION_Y: -23.30664,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MSOBOMVU',
          the_geom: 'POINT (28.18600000000003 -32.32437000000003)',
          LOCATION_X: 28.186,
          LOCATION_Y: -32.32437,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NTABANKULU',
          the_geom: 'POINT (29.302750000000028 -30.95517000000003)',
          LOCATION_X: 29.30275,
          LOCATION_Y: -30.95517,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALUTI',
          the_geom: 'POINT (28.786470000000023 -30.262050000000023)',
          LOCATION_X: 28.78647,
          LOCATION_Y: -30.26205,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LUKHOLWENI',
          the_geom: 'POINT (28.854940000000024 -30.64249000000003)',
          LOCATION_X: 28.85494,
          LOCATION_Y: -30.64249,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUNDRA',
          the_geom: 'POINT (28.550620000000027 -26.186370000000025)',
          LOCATION_X: 28.55062,
          LOCATION_Y: -26.18637,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VRYBURG',
          the_geom: 'POINT (24.726280000000024 -26.959420000000023)',
          LOCATION_X: 24.72628,
          LOCATION_Y: -26.95942,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOMGA',
          the_geom: 'POINT (27.892030000000023 -32.575320000000026)',
          LOCATION_X: 27.89203,
          LOCATION_Y: -32.57532,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRAAFWATER',
          the_geom: 'POINT (18.606470000000016 -32.151740000000025)',
          LOCATION_X: 18.60647,
          LOCATION_Y: -32.15174,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SPRINGBOK',
          the_geom: 'POINT (17.884980000000013 -29.665870000000027)',
          LOCATION_X: 17.88498,
          LOCATION_Y: -29.66587,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALEXANDER BAY',
          the_geom: 'POINT (16.492180000000015 -28.607060000000022)',
          LOCATION_X: 16.49218,
          LOCATION_Y: -28.60706,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GARIES',
          the_geom: 'POINT (17.990240000000018 -30.565040000000028)',
          LOCATION_X: 17.99024,
          LOCATION_Y: -30.56504,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HONDEKLIP BAY',
          the_geom: 'POINT (17.274150000000013 -30.322690000000026)',
          LOCATION_X: 17.27415,
          LOCATION_Y: -30.32269,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEINKOPF',
          the_geom: 'POINT (17.735650000000017 -29.26636000000003)',
          LOCATION_X: 17.73565,
          LOCATION_Y: -29.26636,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VIOOLSDRIF',
          the_geom: 'POINT (17.623540000000013 -28.769110000000023)',
          LOCATION_X: 17.62354,
          LOCATION_Y: -28.76911,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAGUDU',
          the_geom: 'POINT (31.648380000000028 -27.545440000000024)',
          LOCATION_X: 31.64838,
          LOCATION_Y: -27.54544,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HILLBROW',
          the_geom: 'POINT (28.044640000000022 -26.188230000000022)',
          LOCATION_X: 28.04464,
          LOCATION_Y: -26.18823,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SWARTRUGGENS',
          the_geom: 'POINT (26.688950000000027 -25.648900000000026)',
          LOCATION_X: 26.68895,
          LOCATION_Y: -25.6489,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZEERUST',
          the_geom: 'POINT (26.078970000000023 -25.539740000000023)',
          LOCATION_X: 26.07897,
          LOCATION_Y: -25.53974,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILLIERSDORP',
          the_geom: 'POINT (19.28734000000002 -33.992430000000034)',
          LOCATION_X: 19.28734,
          LOCATION_Y: -33.99243,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BREDASDORP',
          the_geom: 'POINT (20.04727000000002 -34.536440000000034)',
          LOCATION_X: 20.04727,
          LOCATION_Y: -34.53644,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CALEDON',
          the_geom: 'POINT (19.429190000000016 -34.23493000000003)',
          LOCATION_X: 19.42919,
          LOCATION_Y: -34.23493,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GANS BAY',
          the_geom: 'POINT (19.351390000000016 -34.57818000000003)',
          LOCATION_X: 19.35139,
          LOCATION_Y: -34.57818,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOUTPAN',
          the_geom: 'POINT (26.060930000000024 -28.721350000000022)',
          LOCATION_X: 26.06093,
          LOCATION_Y: -28.72135,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MEADOWLANDS',
          the_geom: 'POINT (27.900260000000024 -26.221450000000022)',
          LOCATION_X: 27.90026,
          LOCATION_Y: -26.22145,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SPRINGS',
          the_geom: 'POINT (28.442660000000025 -26.244890000000023)',
          LOCATION_X: 28.44266,
          LOCATION_Y: -26.24489,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRAHAMSTOWN',
          the_geom: 'POINT (26.534450000000025 -33.31163000000004)',
          LOCATION_X: 26.53445,
          LOCATION_Y: -33.31163,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALETSWAI',
          the_geom: 'POINT (26.691650000000024 -30.694420000000026)',
          LOCATION_X: 26.69165,
          LOCATION_Y: -30.69442,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSHAMUTUMBU',
          the_geom: 'POINT (30.54586000000003 -22.38491000000002)',
          LOCATION_X: 30.54586,
          LOCATION_Y: -22.38491,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MMABATHO',
          the_geom: 'POINT (25.606900000000024 -25.838300000000025)',
          LOCATION_X: 25.6069,
          LOCATION_Y: -25.8383,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOMANYANENG',
          the_geom: 'POINT (25.659390000000023 -25.894900000000025)',
          LOCATION_X: 25.65939,
          LOCATION_Y: -25.8949,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ITSOSENG',
          the_geom: 'POINT (25.880430000000025 -26.087250000000022)',
          LOCATION_X: 25.88043,
          LOCATION_Y: -26.08725,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOOIFONTEIN',
          the_geom: 'POINT (25.602720000000023 -26.253510000000023)',
          LOCATION_X: 25.60272,
          LOCATION_Y: -26.25351,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MADIBOGO',
          the_geom: 'POINT (25.150700000000022 -26.421890000000023)',
          LOCATION_X: 25.1507,
          LOCATION_Y: -26.42189,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BHEKITHEMBA',
          the_geom: 'POINT (30.86016000000003 -29.977210000000028)',
          LOCATION_X: 30.86016,
          LOCATION_Y: -29.97721,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RONDEBOSCH',
          the_geom: 'POINT (18.468330000000016 -33.96262000000004)',
          LOCATION_X: 18.46833,
          LOCATION_Y: -33.96262,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MUIZENBERG',
          the_geom: 'POINT (18.466630000000016 -34.108720000000034)',
          LOCATION_X: 18.46663,
          LOCATION_Y: -34.10872,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROBERTSON',
          the_geom: 'POINT (19.87543000000002 -33.80517000000003)',
          LOCATION_X: 19.87543,
          LOCATION_Y: -33.80517,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRANDVLEI',
          the_geom: 'POINT (20.489700000000024 -30.464070000000028)',
          LOCATION_X: 20.4897,
          LOCATION_Y: -30.46407,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WASBANK',
          the_geom: 'POINT (30.10001000000003 -28.313410000000026)',
          LOCATION_X: 30.10001,
          LOCATION_Y: -28.31341,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ESHOWE',
          the_geom: 'POINT (31.45689000000003 -28.902370000000026)',
          LOCATION_X: 31.45689,
          LOCATION_Y: -28.90237,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GINGINDLOVU',
          the_geom: 'POINT (31.581450000000032 -29.027910000000027)',
          LOCATION_X: 31.58145,
          LOCATION_Y: -29.02791,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAMBONAMBI',
          the_geom: 'POINT (32.08590000000004 -28.598800000000026)',
          LOCATION_X: 32.0859,
          LOCATION_Y: -28.5988,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NYONI',
          the_geom: 'POINT (31.463010000000025 -29.079750000000022)',
          LOCATION_X: 31.46301,
          LOCATION_Y: -29.07975,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BABANANGO',
          the_geom: 'POINT (31.08263000000003 -28.37593000000003)',
          LOCATION_X: 31.08263,
          LOCATION_Y: -28.37593,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEI MOUTH',
          the_geom: 'POINT (28.374770000000026 -32.67880000000003)',
          LOCATION_X: 28.37477,
          LOCATION_Y: -32.6788,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KING WILLIAMS TOWN',
          the_geom: 'POINT (27.391390000000026 -32.87139000000003)',
          LOCATION_X: 27.39139,
          LOCATION_Y: -32.87139,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEI ROAD',
          the_geom: 'POINT (27.546530000000025 -32.70575000000003)',
          LOCATION_X: 27.54653,
          LOCATION_Y: -32.70575,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KIDDS BEACH',
          the_geom: 'POINT (27.695250000000023 -33.149290000000036)',
          LOCATION_X: 27.69525,
          LOCATION_Y: -33.14929,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MELMOTH',
          the_geom: 'POINT (31.39876000000003 -28.591620000000027)',
          LOCATION_X: 31.39876,
          LOCATION_Y: -28.59162,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RICHMOND-KZN',
          the_geom: 'POINT (30.26986000000003 -29.87238000000003)',
          LOCATION_X: 30.26986,
          LOCATION_Y: -29.87238,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WARTBURG',
          the_geom: 'POINT (30.576800000000034 -29.43370000000003)',
          LOCATION_X: 30.5768,
          LOCATION_Y: -29.4337,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAMELODI EAST',
          the_geom: 'POINT (28.396090000000022 -25.713570000000022)',
          LOCATION_X: 28.39609,
          LOCATION_Y: -25.71357,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAMASHU E',
          the_geom: 'POINT (31.00027000000003 -29.73592000000003)',
          LOCATION_X: 31.00027,
          LOCATION_Y: -29.73592,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LWANDLE',
          the_geom: 'POINT (18.867180000000015 -34.11561000000003)',
          LOCATION_X: 18.86718,
          LOCATION_Y: -34.11561,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MPHEPHU',
          the_geom: 'POINT (30.039130000000032 -22.898500000000023)',
          LOCATION_X: 30.03913,
          LOCATION_Y: -22.8985,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FRASERBURG',
          the_geom: 'POINT (21.51360000000002 -31.910870000000028)',
          LOCATION_X: 21.5136,
          LOCATION_Y: -31.91087,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROENVLEI',
          the_geom: 'POINT (30.231210000000026 -27.462100000000028)',
          LOCATION_X: 30.23121,
          LOCATION_Y: -27.4621,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EVATT',
          the_geom: 'POINT (29.35065000000003 -30.036910000000027)',
          LOCATION_X: 29.35065,
          LOCATION_Y: -30.03691,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PUNZANA',
          the_geom: 'POINT (27.445770000000024 -33.069030000000026)',
          LOCATION_X: 27.44577,
          LOCATION_Y: -33.06903,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CENTANE',
          the_geom: 'POINT (28.32020000000003 -32.510210000000036)',
          LOCATION_X: 28.3202,
          LOCATION_Y: -32.51021,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INTSIKENI',
          the_geom: 'POINT (29.588090000000026 -30.13768000000003)',
          LOCATION_X: 29.58809,
          LOCATION_Y: -30.13768,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EZIBELENI',
          the_geom: 'POINT (26.952820000000024 -31.904840000000032)',
          LOCATION_X: 26.95282,
          LOCATION_Y: -31.90484,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IXOPO',
          the_geom: 'POINT (30.060210000000026 -30.154800000000026)',
          LOCATION_X: 30.06021,
          LOCATION_Y: -30.1548,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ST FAITHS',
          the_geom: 'POINT (30.202430000000028 -30.529340000000023)',
          LOCATION_X: 30.20243,
          LOCATION_Y: -30.52934,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WANDA',
          the_geom: 'POINT (24.432680000000023 -29.600040000000032)',
          LOCATION_X: 24.43268,
          LOCATION_Y: -29.60004,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALLANRIDGE',
          the_geom: 'POINT (26.64818000000003 -27.750130000000027)',
          LOCATION_X: 26.64818,
          LOCATION_Y: -27.75013,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OSIZWENI',
          the_geom: 'POINT (30.129370000000026 -27.790430000000026)',
          LOCATION_X: 30.12937,
          LOCATION_Y: -27.79043,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WENTWORTH',
          the_geom: 'POINT (30.98088000000003 -29.941770000000027)',
          LOCATION_X: 30.98088,
          LOCATION_Y: -29.94177,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSHAULU',
          the_geom: 'POINT (30.747730000000026 -22.80382000000002)',
          LOCATION_X: 30.74773,
          LOCATION_Y: -22.80382,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IDUTYWA',
          the_geom: 'POINT (28.307970000000022 -32.100580000000036)',
          LOCATION_X: 28.30797,
          LOCATION_Y: -32.10058,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAARL EAST',
          the_geom: 'POINT (18.99406000000002 -33.71148000000003)',
          LOCATION_X: 18.99406,
          LOCATION_Y: -33.71148,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROADSIDE',
          the_geom: 'POINT (28.84930000000003 -27.518420000000024)',
          LOCATION_X: 28.8493,
          LOCATION_Y: -27.51842,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VREDE',
          the_geom: 'POINT (29.168970000000026 -27.423210000000026)',
          LOCATION_X: 29.16897,
          LOCATION_Y: -27.42321,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WARDEN',
          the_geom: 'POINT (28.964090000000027 -27.853850000000026)',
          LOCATION_X: 28.96409,
          LOCATION_Y: -27.85385,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GOEDEMOED',
          the_geom: 'POINT (26.403350000000025 -30.559240000000027)',
          LOCATION_X: 26.40335,
          LOCATION_Y: -30.55924,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JACOBSDAL',
          the_geom: 'POINT (24.770640000000025 -29.130180000000028)',
          LOCATION_X: 24.77064,
          LOCATION_Y: -29.13018,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JAGERSFONTEIN',
          the_geom: 'POINT (25.422910000000023 -29.760540000000027)',
          LOCATION_X: 25.42291,
          LOCATION_Y: -29.76054,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHILIPPI',
          the_geom: 'POINT (18.540540000000018 -34.00107000000003)',
          LOCATION_X: 18.54054,
          LOCATION_Y: -34.00107,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FLOUKRAAL',
          the_geom: 'POINT (27.054840000000024 -30.996230000000025)',
          LOCATION_X: 27.05484,
          LOCATION_Y: -30.99623,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JAMESTOWN',
          the_geom: 'POINT (26.810230000000022 -31.120500000000032)',
          LOCATION_X: 26.81023,
          LOCATION_Y: -31.1205,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LADY GREY',
          the_geom: 'POINT (27.209230000000026 -30.71202000000003)',
          LOCATION_X: 27.20923,
          LOCATION_Y: -30.71202,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LADYSMITH',
          the_geom: 'POINT (29.77862000000003 -28.561240000000023)',
          LOCATION_X: 29.77862,
          LOCATION_Y: -28.56124,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AMANGWE',
          the_geom: 'POINT (29.61758000000003 -28.941270000000024)',
          LOCATION_X: 29.61758,
          LOCATION_Y: -28.94127,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BESTERS',
          the_geom: 'POINT (29.64116000000003 -28.436730000000022)',
          LOCATION_X: 29.64116,
          LOCATION_Y: -28.43673,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EZAKHENI',
          the_geom: 'POINT (29.927800000000026 -28.59515000000003)',
          LOCATION_X: 29.9278,
          LOCATION_Y: -28.59515,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RICHARDS BAY',
          the_geom: 'POINT (32.05469000000003 -28.748240000000028)',
          LOCATION_X: 32.05469,
          LOCATION_Y: -28.74824,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LANGEBAAN',
          the_geom: 'POINT (18.03349000000002 -33.092870000000026)',
          LOCATION_X: 18.03349,
          LOCATION_Y: -33.09287,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOORREESBURG',
          the_geom: 'POINT (18.664660000000016 -33.15359000000004)',
          LOCATION_X: 18.66466,
          LOCATION_Y: -33.15359,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIKETBERG',
          the_geom: 'POINT (18.75449000000002 -32.90627000000003)',
          LOCATION_X: 18.75449,
          LOCATION_Y: -32.90627,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'REDELINGHUYS',
          the_geom: 'POINT (18.537370000000017 -32.47741000000003)',
          LOCATION_X: 18.53737,
          LOCATION_Y: -32.47741,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ST HELENA BAY',
          the_geom: 'POINT (18.024070000000016 -32.75816000000003)',
          LOCATION_X: 18.02407,
          LOCATION_Y: -32.75816,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VREDENBURG',
          the_geom: 'POINT (18.002280000000013 -32.90673000000003)',
          LOCATION_X: 18.00228,
          LOCATION_Y: -32.90673,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOLTENO',
          the_geom: 'POINT (26.361420000000024 -31.39491000000003)',
          LOCATION_X: 26.36142,
          LOCATION_Y: -31.39491,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DE DEUR',
          the_geom: 'POINT (27.910790000000024 -26.51511000000003)',
          LOCATION_X: 27.91079,
          LOCATION_Y: -26.51511,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BROOKLYN',
          the_geom: 'POINT (28.23770000000003 -25.755600000000026)',
          LOCATION_X: 28.2377,
          LOCATION_Y: -25.7556,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NQUTHU',
          the_geom: 'POINT (30.67726000000003 -28.212190000000028)',
          LOCATION_X: 30.67726,
          LOCATION_Y: -28.21219,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NKANDLA',
          the_geom: 'POINT (31.091710000000027 -28.620280000000026)',
          LOCATION_X: 31.09171,
          LOCATION_Y: -28.62028,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MPUNGAMHLOPHE',
          the_geom: 'POINT (31.253590000000028 -28.273760000000024)',
          LOCATION_X: 31.25359,
          LOCATION_Y: -28.27376,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOGWADI',
          the_geom: 'POINT (29.327680000000022 -23.36789000000002)',
          LOCATION_X: 29.32768,
          LOCATION_Y: -23.36789,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIENAAR',
          the_geom: 'POINT (31.18460000000003 -25.434370000000023)',
          LOCATION_X: 31.1846,
          LOCATION_Y: -25.43437,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIEPSLOOT',
          the_geom: 'POINT (28.022030000000022 -25.923220000000025)',
          LOCATION_X: 28.02203,
          LOCATION_Y: -25.92322,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEMATO',
          the_geom: 'POINT (26.892750000000024 -33.57672000000004)',
          LOCATION_X: 26.89275,
          LOCATION_Y: -33.57672,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOTLOKWA',
          the_geom: 'POINT (29.73967000000003 -23.49214000000002)',
          LOCATION_X: 29.73967,
          LOCATION_Y: -23.49214,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ATAMELANG',
          the_geom: 'POINT (25.370520000000024 -26.50534000000003)',
          LOCATION_X: 25.37052,
          LOCATION_Y: -26.50534,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RUST DE WINTER',
          the_geom: 'POINT (28.607610000000026 -25.202960000000022)',
          LOCATION_X: 28.60761,
          LOCATION_Y: -25.20296,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GALESHEWE',
          the_geom: 'POINT (24.742770000000025 -28.710510000000028)',
          LOCATION_X: 24.74277,
          LOCATION_Y: -28.71051,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARTSWATER',
          the_geom: 'POINT (24.80519000000002 -27.753610000000023)',
          LOCATION_X: 24.80519,
          LOCATION_Y: -27.75361,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JAN KEMPDORP',
          the_geom: 'POINT (24.838970000000025 -27.916060000000023)',
          LOCATION_X: 24.83897,
          LOCATION_Y: -27.91606,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MODIMOLLE',
          the_geom: 'POINT (28.408810000000027 -24.706920000000025)',
          LOCATION_X: 28.40881,
          LOCATION_Y: -24.70692,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NABOOMSPRUIT',
          the_geom: 'POINT (28.712650000000032 -24.518430000000023)',
          LOCATION_X: 28.71265,
          LOCATION_Y: -24.51843,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DORSET',
          the_geom: 'POINT (28.160960000000028 -24.06064000000002)',
          LOCATION_X: 28.16096,
          LOCATION_Y: -24.06064,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIENAARSRIVIER',
          the_geom: 'POINT (28.296400000000027 -25.202460000000023)',
          LOCATION_X: 28.2964,
          LOCATION_Y: -25.20246,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROEDTAN',
          the_geom: 'POINT (29.08164000000003 -24.59628000000002)',
          LOCATION_X: 29.08164,
          LOCATION_Y: -24.59628,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROOIBERG',
          the_geom: 'POINT (27.730790000000027 -24.779120000000024)',
          LOCATION_X: 27.73079,
          LOCATION_Y: -24.77912,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TUINPLAAS',
          the_geom: 'POINT (28.736050000000027 -24.902460000000023)',
          LOCATION_X: 28.73605,
          LOCATION_Y: -24.90246,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHOENIX',
          the_geom: 'POINT (31.00799000000003 -29.701430000000023)',
          LOCATION_X: 31.00799,
          LOCATION_Y: -29.70143,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CITRUSDAL',
          the_geom: 'POINT (19.011010000000017 -32.588290000000036)',
          LOCATION_X: 19.01101,
          LOCATION_Y: -32.58829,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLANWILLIAM',
          the_geom: 'POINT (18.892260000000018 -32.17615000000003)',
          LOCATION_X: 18.89226,
          LOCATION_Y: -32.17615,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DORING BAY',
          the_geom: 'POINT (18.236780000000017 -31.811740000000025)',
          LOCATION_X: 18.23678,
          LOCATION_Y: -31.81174,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BURGERSFORT',
          the_geom: 'POINT (30.32999000000003 -24.679250000000025)',
          LOCATION_X: 30.32999,
          LOCATION_Y: -24.67925,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DULLSTROOM',
          the_geom: 'POINT (30.10594000000003 -25.416760000000025)',
          LOCATION_X: 30.10594,
          LOCATION_Y: -25.41676,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEDWANG',
          the_geom: 'POINT (27.968930000000025 -25.087000000000025)',
          LOCATION_X: 27.96893,
          LOCATION_Y: -25.087,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CYFERSKUIL',
          the_geom: 'POINT (28.240660000000023 -25.076400000000024)',
          LOCATION_X: 28.24066,
          LOCATION_Y: -25.0764,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHOKENG',
          the_geom: 'POINT (27.162540000000025 -25.573130000000024)',
          LOCATION_X: 27.16254,
          LOCATION_Y: -25.57313,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MADIKWE',
          the_geom: 'POINT (26.524470000000026 -25.351770000000023)',
          LOCATION_X: 26.52447,
          LOCATION_Y: -25.35177,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TAUNG',
          the_geom: 'POINT (24.77898000000002 -27.545070000000024)',
          LOCATION_X: 24.77898,
          LOCATION_Y: -27.54507,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAMPIERSTAT',
          the_geom: 'POINT (24.690180000000023 -27.770910000000026)',
          LOCATION_X: 24.69018,
          LOCATION_Y: -27.77091,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KGOMOTSO',
          the_geom: 'POINT (24.612790000000025 -27.982180000000028)',
          LOCATION_X: 24.61279,
          LOCATION_Y: -27.98218,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WEDELA',
          the_geom: 'POINT (27.38300000000003 -26.456700000000026)',
          LOCATION_X: 27.383,
          LOCATION_Y: -26.4567,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAMAKHUTHA',
          the_geom: 'POINT (30.86804000000003 -30.025300000000026)',
          LOCATION_X: 30.86804,
          LOCATION_Y: -30.0253,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWANDENGEZI',
          the_geom: 'POINT (30.768950000000032 -29.85093000000003)',
          LOCATION_X: 30.76895,
          LOCATION_Y: -29.85093,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LESLIE',
          the_geom: 'POINT (28.921860000000024 -26.369640000000025)',
          LOCATION_X: 28.92186,
          LOCATION_Y: -26.36964,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BETHAL',
          the_geom: 'POINT (29.46955000000003 -26.460980000000024)',
          LOCATION_X: 29.46955,
          LOCATION_Y: -26.46098,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KRIEL',
          the_geom: 'POINT (29.260610000000028 -26.250640000000022)',
          LOCATION_X: 29.26061,
          LOCATION_Y: -26.25064,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'REIVILO',
          the_geom: 'POINT (24.183300000000028 -27.570720000000023)',
          LOCATION_X: 24.1833,
          LOCATION_Y: -27.57072,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MUTALE',
          the_geom: 'POINT (30.52317000000003 -22.734450000000024)',
          LOCATION_X: 30.52317,
          LOCATION_Y: -22.73445,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EAST LONDON',
          the_geom: 'POINT (27.902880000000025 -33.02058000000003)',
          LOCATION_X: 27.90288,
          LOCATION_Y: -33.02058,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FLAGSTAFF',
          the_geom: 'POINT (29.494720000000026 -31.081870000000027)',
          LOCATION_X: 29.49472,
          LOCATION_Y: -31.08187,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BIZANA',
          the_geom: 'POINT (29.859390000000026 -30.854280000000028)',
          LOCATION_X: 29.85939,
          LOCATION_Y: -30.85428,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HAZYVIEW',
          the_geom: 'POINT (31.128300000000035 -25.047010000000025)',
          LOCATION_X: 31.1283,
          LOCATION_Y: -25.04701,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WEMBEZI',
          the_geom: 'POINT (29.789170000000027 -29.045020000000026)',
          LOCATION_X: 29.78917,
          LOCATION_Y: -29.04502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILLA NORA',
          the_geom: 'POINT (28.125870000000027 -23.52831000000002)',
          LOCATION_X: 28.12587,
          LOCATION_Y: -23.52831,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEWLANDS EAST',
          the_geom: 'POINT (30.97478000000003 -29.785140000000027)',
          LOCATION_X: 30.97478,
          LOCATION_Y: -29.78514,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DENNILTON',
          the_geom: 'POINT (29.147430000000032 -25.258650000000024)',
          LOCATION_X: 29.14743,
          LOCATION_Y: -25.25865,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALELANE',
          the_geom: 'POINT (31.51072000000003 -25.494360000000025)',
          LOCATION_X: 31.51072,
          LOCATION_Y: -25.49436,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IBISI',
          the_geom: 'POINT (29.88793000000003 -30.405060000000027)',
          LOCATION_X: 29.88793,
          LOCATION_Y: -30.40506,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRIDGE CAMP',
          the_geom: 'POINT (27.358800000000027 -32.021970000000024)',
          LOCATION_X: 27.3588,
          LOCATION_Y: -32.02197,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NGQELENI',
          the_geom: 'POINT (29.032250000000026 -31.671930000000028)',
          LOCATION_X: 29.03225,
          LOCATION_Y: -31.67193,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'POTCHEFSTROOM',
          the_geom: 'POINT (27.094560000000023 -26.715310000000027)',
          LOCATION_X: 27.09456,
          LOCATION_Y: -26.71531,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ORANGE FARMS',
          the_geom: 'POINT (27.86720000000003 -26.478480000000026)',
          LOCATION_X: 27.8672,
          LOCATION_Y: -26.47848,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MATSULU',
          the_geom: 'POINT (31.34609000000003 -25.515130000000024)',
          LOCATION_X: 31.34609,
          LOCATION_Y: -25.51513,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAYFLOWER',
          the_geom: 'POINT (30.776220000000027 -26.303530000000023)',
          LOCATION_X: 30.77622,
          LOCATION_Y: -26.30353,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MACHADODORP',
          the_geom: 'POINT (30.25328000000003 -25.668430000000022)',
          LOCATION_X: 30.25328,
          LOCATION_Y: -25.66843,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OHRIGSTAD',
          the_geom: 'POINT (30.55652000000003 -24.751910000000024)',
          LOCATION_X: 30.55652,
          LOCATION_Y: -24.75191,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRIMROSE',
          the_geom: 'POINT (28.157950000000028 -26.189140000000023)',
          LOCATION_X: 28.15795,
          LOCATION_Y: -26.18914,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALBERTON',
          the_geom: 'POINT (28.126920000000027 -26.260880000000025)',
          LOCATION_X: 28.12692,
          LOCATION_Y: -26.26088,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HIMEVILLE',
          the_geom: 'POINT (29.51173000000003 -29.75237000000003)',
          LOCATION_X: 29.51173,
          LOCATION_Y: -29.75237,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EERSTERUST',
          the_geom: 'POINT (28.31890000000003 -25.706020000000024)',
          LOCATION_X: 28.3189,
          LOCATION_Y: -25.70602,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KANANA',
          the_geom: 'POINT (26.64038000000003 -26.959750000000025)',
          LOCATION_X: 26.64038,
          LOCATION_Y: -26.95975,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUN CITY',
          the_geom: 'POINT (27.098690000000026 -25.362910000000024)',
          LOCATION_X: 27.09869,
          LOCATION_Y: -25.36291,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TUMAHOLE',
          the_geom: 'POINT (27.485370000000025 -26.920080000000024)',
          LOCATION_X: 27.48537,
          LOCATION_Y: -26.92008,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUNCAN VILLAGE',
          the_geom: 'POINT (27.888720000000024 -33.005050000000026)',
          LOCATION_X: 27.88872,
          LOCATION_Y: -33.00505,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GONUBIE',
          the_geom: 'POINT (28.000840000000025 -32.93660000000003)',
          LOCATION_X: 28.00084,
          LOCATION_Y: -32.9366,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BLUEWATER',
          the_geom: 'POINT (27.950530000000025 -32.72743000000003)',
          LOCATION_X: 27.95053,
          LOCATION_Y: -32.72743,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEACON BAY',
          the_geom: 'POINT (27.938360000000028 -32.968840000000036)',
          LOCATION_X: 27.93836,
          LOCATION_Y: -32.96884,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BERLIN',
          the_geom: 'POINT (27.57320000000003 -32.878590000000024)',
          LOCATION_X: 27.5732,
          LOCATION_Y: -32.87859,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FOCHVILLE',
          the_geom: 'POINT (27.494160000000022 -26.487900000000025)',
          LOCATION_X: 27.49416,
          LOCATION_Y: -26.4879,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOYENI',
          the_geom: 'POINT (27.130210000000027 -33.48006000000003)',
          LOCATION_X: 27.13021,
          LOCATION_Y: -33.48006,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INYIBIBA',
          the_geom: 'POINT (27.694670000000023 -32.955960000000026)',
          LOCATION_X: 27.69467,
          LOCATION_Y: -32.95596,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WHITTLESEA',
          the_geom: 'POINT (26.824430000000024 -32.170970000000025)',
          LOCATION_X: 26.82443,
          LOCATION_Y: -32.17097,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLEINBULHOEK',
          the_geom: 'POINT (26.575000000000028 -32.16655000000003)',
          LOCATION_X: 26.575,
          LOCATION_Y: -32.16655,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MELODING',
          the_geom: 'POINT (26.894750000000023 -28.133080000000028)',
          LOCATION_X: 26.89475,
          LOCATION_Y: -28.13308,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ARLINGTON',
          the_geom: 'POINT (27.850580000000026 -28.028890000000025)',
          LOCATION_X: 27.85058,
          LOCATION_Y: -28.02889,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STILFONTEIN',
          the_geom: 'POINT (26.777300000000025 -26.844510000000025)',
          LOCATION_X: 26.7773,
          LOCATION_Y: -26.84451,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHRISTIANA',
          the_geom: 'POINT (25.16738000000002 -27.909180000000028)',
          LOCATION_X: 25.16738,
          LOCATION_Y: -27.90918,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DAVEYTON',
          the_geom: 'POINT (28.41560000000003 -26.153280000000024)',
          LOCATION_X: 28.4156,
          LOCATION_Y: -26.15328,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PELLA',
          the_geom: 'POINT (19.152770000000018 -29.033500000000025)',
          LOCATION_X: 19.15277,
          LOCATION_Y: -29.0335,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LETHABONG',
          the_geom: 'POINT (27.508950000000027 -25.43625000000002)',
          LOCATION_X: 27.50895,
          LOCATION_Y: -25.43625,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROSEDALE',
          the_geom: 'POINT (21.20795000000002 -28.45420000000003)',
          LOCATION_X: 21.20795,
          LOCATION_Y: -28.4542,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PETRUS STEYN',
          the_geom: 'POINT (28.131610000000027 -27.647110000000026)',
          LOCATION_X: 28.13161,
          LOCATION_Y: -27.64711,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARIKANA',
          the_geom: 'POINT (27.486450000000023 -25.705130000000025)',
          LOCATION_X: 27.48645,
          LOCATION_Y: -25.70513,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OTTOSHOOP',
          the_geom: 'POINT (25.962560000000025 -25.751380000000022)',
          LOCATION_X: 25.96256,
          LOCATION_Y: -25.75138,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VERKEERDEVLEI',
          the_geom: 'POINT (26.779010000000024 -28.832240000000024)',
          LOCATION_X: 26.77901,
          LOCATION_Y: -28.83224,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HENDERSON',
          the_geom: 'POINT (27.336090000000024 -32.31440000000003)',
          LOCATION_X: 27.33609,
          LOCATION_Y: -32.3144,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLERKSDORP',
          the_geom: 'POINT (26.663110000000025 -26.863530000000022)',
          LOCATION_X: 26.66311,
          LOCATION_Y: -26.86353,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOKOPONG',
          the_geom: 'POINT (22.97807000000002 -25.365550000000024)',
          LOCATION_X: 22.97807,
          LOCATION_Y: -25.36555,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DWAALBOOM',
          the_geom: 'POINT (26.808080000000025 -24.727080000000022)',
          LOCATION_X: 26.80808,
          LOCATION_Y: -24.72708,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRASKOP',
          the_geom: 'POINT (30.83923000000003 -24.934940000000022)',
          LOCATION_X: 30.83923,
          LOCATION_Y: -24.93494,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SWELLENDAM',
          the_geom: 'POINT (20.44455000000002 -34.02047000000003)',
          LOCATION_X: 20.44455,
          LOCATION_Y: -34.02047,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEWCASTLE',
          the_geom: 'POINT (29.938260000000028 -27.760690000000025)',
          LOCATION_X: 29.93826,
          LOCATION_Y: -27.76069,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MTUBATUBA',
          the_geom: 'POINT (32.184810000000034 -28.419570000000025)',
          LOCATION_X: 32.18481,
          LOCATION_Y: -28.41957,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEW HANOVER',
          the_geom: 'POINT (30.527690000000028 -29.354330000000026)',
          LOCATION_X: 30.52769,
          LOCATION_Y: -29.35433,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMBILO',
          the_geom: 'POINT (30.991360000000032 -29.87218000000003)',
          LOCATION_X: 30.99136,
          LOCATION_Y: -29.87218,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FOURIESBURG',
          the_geom: 'POINT (28.208410000000022 -28.615880000000026)',
          LOCATION_X: 28.20841,
          LOCATION_Y: -28.61588,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MASOYI',
          the_geom: 'POINT (31.115410000000026 -25.163540000000022)',
          LOCATION_X: 31.11541,
          LOCATION_Y: -25.16354,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEBOWAKGOMO',
          the_geom: 'POINT (29.481870000000022 -24.320980000000024)',
          LOCATION_X: 29.48187,
          LOCATION_Y: -24.32098,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STRYDENBURG',
          the_geom: 'POINT (23.676840000000023 -29.94306000000003)',
          LOCATION_X: 23.67684,
          LOCATION_Y: -29.94306,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VANDERKLOOF',
          the_geom: 'POINT (24.741640000000025 -29.998610000000028)',
          LOCATION_X: 24.74164,
          LOCATION_Y: -29.99861,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUNRISE',
          the_geom: 'POINT (24.020460000000025 -30.649930000000026)',
          LOCATION_X: 24.02046,
          LOCATION_Y: -30.64993,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VORSTERSHOOP',
          the_geom: 'POINT (23.024480000000022 -25.837380000000024)',
          LOCATION_X: 23.02448,
          LOCATION_Y: -25.83738,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STELLA',
          the_geom: 'POINT (24.862130000000025 -26.549450000000025)',
          LOCATION_X: 24.86213,
          LOCATION_Y: -26.54945,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SETLAGOLE',
          the_geom: 'POINT (25.113760000000024 -26.271570000000025)',
          LOCATION_X: 25.11376,
          LOCATION_Y: -26.27157,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOSCHKOP',
          the_geom: 'POINT (28.407090000000025 -25.816660000000024)',
          LOCATION_X: 28.40709,
          LOCATION_Y: -25.81666,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DAWN PARK',
          the_geom: 'POINT (28.247700000000027 -26.315000000000026)',
          LOCATION_X: 28.2477,
          LOCATION_Y: -26.315,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSAKANE',
          the_geom: 'POINT (28.369750000000025 -26.351940000000024)',
          LOCATION_X: 28.36975,
          LOCATION_Y: -26.35194,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WEENEN',
          the_geom: 'POINT (30.084610000000026 -28.853070000000027)',
          LOCATION_X: 30.08461,
          LOCATION_Y: -28.85307,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CEDARVILLE',
          the_geom: 'POINT (29.045740000000027 -30.391060000000028)',
          LOCATION_X: 29.04574,
          LOCATION_Y: -30.39106,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ISIPINGO',
          the_geom: 'POINT (30.925210000000032 -29.986660000000025)',
          LOCATION_X: 30.92521,
          LOCATION_Y: -29.98666,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELDORADO PARK',
          the_geom: 'POINT (27.900820000000028 -26.291050000000023)',
          LOCATION_X: 27.90082,
          LOCATION_Y: -26.29105,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLOBANE',
          the_geom: 'POINT (31.009710000000027 -27.737170000000024)',
          LOCATION_X: 31.00971,
          LOCATION_Y: -27.73717,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KINGSLEY',
          the_geom: 'POINT (30.53045000000003 -27.93065000000003)',
          LOCATION_X: 30.53045,
          LOCATION_Y: -27.93065,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELLAIR',
          the_geom: 'POINT (30.94137000000003 -29.889680000000027)',
          LOCATION_X: 30.94137,
          LOCATION_Y: -29.88968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BIESIESVLEI',
          the_geom: 'POINT (25.903840000000024 -26.378330000000023)',
          LOCATION_X: 25.90384,
          LOCATION_Y: -26.37833,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MFULENI',
          the_geom: 'POINT (18.687420000000017 -33.98106000000003)',
          LOCATION_X: 18.68742,
          LOCATION_Y: -33.98106,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VULINDLELA',
          the_geom: 'POINT (27.712420000000026 -32.92197000000004)',
          LOCATION_X: 27.71242,
          LOCATION_Y: -32.92197,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DELPORTSHOOP',
          the_geom: 'POINT (24.31019000000002 -28.416050000000027)',
          LOCATION_X: 24.31019,
          LOCATION_Y: -28.41605,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIEBEEK WEST',
          the_geom: 'POINT (18.87270000000002 -33.350930000000034)',
          LOCATION_X: 18.8727,
          LOCATION_Y: -33.35093,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LYDENBURG',
          the_geom: 'POINT (30.452980000000025 -25.096400000000028)',
          LOCATION_X: 30.45298,
          LOCATION_Y: -25.0964,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOKSBURG',
          the_geom: 'POINT (28.237870000000022 -26.220250000000025)',
          LOCATION_X: 28.23787,
          LOCATION_Y: -26.22025,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEMPTON PARK',
          the_geom: 'POINT (28.232110000000024 -26.101410000000023)',
          LOCATION_X: 28.23211,
          LOCATION_Y: -26.10141,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TARLTON',
          the_geom: 'POINT (27.667590000000022 -26.092210000000023)',
          LOCATION_X: 27.66759,
          LOCATION_Y: -26.09221,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EKANGALA',
          the_geom: 'POINT (28.741550000000032 -25.691360000000024)',
          LOCATION_X: 28.74155,
          LOCATION_Y: -25.69136,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIETERMARITZBURG',
          the_geom: 'POINT (30.379790000000032 -29.60476000000003)',
          LOCATION_X: 30.37979,
          LOCATION_Y: -29.60476,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MID ILLOVO',
          the_geom: 'POINT (30.51511000000003 -29.966080000000023)',
          LOCATION_X: 30.51511,
          LOCATION_Y: -29.96608,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALEXANDRA ROAD',
          the_geom: 'POINT (30.387730000000026 -29.619010000000028)',
          LOCATION_X: 30.38773,
          LOCATION_Y: -29.61901,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BISHOPSTOWE',
          the_geom: 'POINT (30.476820000000032 -29.584220000000027)',
          LOCATION_X: 30.47682,
          LOCATION_Y: -29.58422,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOSTON',
          the_geom: 'POINT (30.04722000000003 -29.685090000000027)',
          LOCATION_X: 30.04722,
          LOCATION_Y: -29.68509,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAMPERDOWN',
          the_geom: 'POINT (30.54127000000003 -29.72907000000003)',
          LOCATION_X: 30.54127,
          LOCATION_Y: -29.72907,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MIDDELBURG MPUMALANG',
          the_geom: 'POINT (29.45876000000003 -25.762540000000023)',
          LOCATION_X: 29.45876,
          LOCATION_Y: -25.76254,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MANGAUNG',
          the_geom: 'POINT (26.249560000000024 -29.156740000000024)',
          LOCATION_X: 26.24956,
          LOCATION_Y: -29.15674,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WELLINGTON',
          the_geom: 'POINT (19.005150000000018 -33.64022000000003)',
          LOCATION_X: 19.00515,
          LOCATION_Y: -33.64022,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROUXVILLE',
          the_geom: 'POINT (26.834190000000024 -30.42054000000003)',
          LOCATION_X: 26.83419,
          LOCATION_Y: -30.42054,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EXCELSIOR',
          the_geom: 'POINT (27.061090000000025 -28.93820000000003)',
          LOCATION_X: 27.06109,
          LOCATION_Y: -28.9382,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FICKSBURG',
          the_geom: 'POINT (27.873970000000025 -28.870510000000024)',
          LOCATION_X: 27.87397,
          LOCATION_Y: -28.87051,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOBHOUSE',
          the_geom: 'POINT (27.142840000000025 -29.528450000000028)',
          LOCATION_X: 27.14284,
          LOCATION_Y: -29.52845,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARQUARD',
          the_geom: 'POINT (27.425900000000027 -28.665360000000025)',
          LOCATION_X: 27.4259,
          LOCATION_Y: -28.66536,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SENEKAL',
          the_geom: 'POINT (27.622600000000027 -28.321200000000026)',
          LOCATION_X: 27.6226,
          LOCATION_Y: -28.3212,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BETHLEHEM',
          the_geom: 'POINT (28.308890000000027 -28.231080000000027)',
          LOCATION_X: 28.30889,
          LOCATION_Y: -28.23108,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CORNELIA',
          the_geom: 'POINT (28.854220000000026 -27.238610000000023)',
          LOCATION_X: 28.85422,
          LOCATION_Y: -27.23861,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KESTELL',
          the_geom: 'POINT (28.705160000000028 -28.314520000000027)',
          LOCATION_X: 28.70516,
          LOCATION_Y: -28.31452,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'REITZ',
          the_geom: 'POINT (28.431710000000027 -27.799270000000025)',
          LOCATION_X: 28.43171,
          LOCATION_Y: -27.79927,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TULBAGH',
          the_geom: 'POINT (19.140520000000016 -33.285030000000035)',
          LOCATION_X: 19.14052,
          LOCATION_Y: -33.28503,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SAWOTI',
          the_geom: 'POINT (30.490260000000024 -30.27408000000003)',
          LOCATION_X: 30.49026,
          LOCATION_Y: -30.27408,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SCOTTBURGH',
          the_geom: 'POINT (30.755760000000027 -30.287630000000025)',
          LOCATION_X: 30.75576,
          LOCATION_Y: -30.28763,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOUTHPORT',
          the_geom: 'POINT (30.50909000000003 -30.66458000000003)',
          LOCATION_X: 30.50909,
          LOCATION_Y: -30.66458,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMKOMAAS',
          the_geom: 'POINT (30.79157000000003 -30.20719000000003)',
          LOCATION_X: 30.79157,
          LOCATION_Y: -30.20719,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HIBBERDENE',
          the_geom: 'POINT (30.57051000000003 -30.57774000000003)',
          LOCATION_X: 30.57051,
          LOCATION_Y: -30.57774,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GAMALAKHE',
          the_geom: 'POINT (30.341670000000025 -30.799860000000027)',
          LOCATION_X: 30.34167,
          LOCATION_Y: -30.79986,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHATSWORTH',
          the_geom: 'POINT (30.88538000000003 -29.912310000000026)',
          LOCATION_X: 30.88538,
          LOCATION_Y: -29.91231,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CATO MANOR',
          the_geom: 'POINT (30.96800000000003 -29.860120000000027)',
          LOCATION_X: 30.968,
          LOCATION_Y: -29.86012,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BAYVIEW',
          the_geom: 'POINT (30.91170000000003 -29.922780000000024)',
          LOCATION_X: 30.9117,
          LOCATION_Y: -29.92278,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ILINGE',
          the_geom: 'POINT (27.038430000000023 -31.97622000000003)',
          LOCATION_X: 27.03843,
          LOCATION_Y: -31.97622,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIET PLESSIS',
          the_geom: 'POINT (24.40795000000002 -26.162400000000027)',
          LOCATION_X: 24.40795,
          LOCATION_Y: -26.1624,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NDWEDWE',
          the_geom: 'POINT (30.935960000000023 -29.515060000000027)',
          LOCATION_X: 30.93596,
          LOCATION_Y: -29.51506,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARTEBEESKOP',
          the_geom: 'POINT (30.93031000000003 -26.180320000000023)',
          LOCATION_X: 30.93031,
          LOCATION_Y: -26.18032,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'QUEENSTOWN',
          the_geom: 'POINT (26.871440000000025 -31.897040000000025)',
          LOCATION_X: 26.87144,
          LOCATION_Y: -31.89704,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARARE',
          the_geom: 'POINT (18.669300000000018 -34.05193000000003)',
          LOCATION_X: 18.6693,
          LOCATION_Y: -34.05193,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLEINVLEI',
          the_geom: 'POINT (18.718790000000016 -33.98820000000003)',
          LOCATION_X: 18.71879,
          LOCATION_Y: -33.9882,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIETGAT',
          the_geom: 'POINT (28.090010000000028 -25.497860000000024)',
          LOCATION_X: 28.09001,
          LOCATION_Y: -25.49786,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AKASIA',
          the_geom: 'POINT (28.095380000000027 -25.625710000000023)',
          LOCATION_X: 28.09538,
          LOCATION_Y: -25.62571,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOITEKONG',
          the_geom: 'POINT (27.297040000000024 -25.604650000000024)',
          LOCATION_X: 27.29704,
          LOCATION_Y: -25.60465,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAGISHO',
          the_geom: 'POINT (24.71971000000002 -28.71140000000003)',
          LOCATION_X: 24.71971,
          LOCATION_Y: -28.7114,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRABOUW',
          the_geom: 'POINT (19.019010000000016 -34.153810000000036)',
          LOCATION_X: 19.01901,
          LOCATION_Y: -34.15381,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HERMANUS',
          the_geom: 'POINT (19.236230000000017 -34.41859000000003)',
          LOCATION_X: 19.23623,
          LOCATION_Y: -34.41859,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLEINMOND',
          the_geom: 'POINT (19.032320000000016 -34.339630000000035)',
          LOCATION_X: 19.03232,
          LOCATION_Y: -34.33963,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NAPIER',
          the_geom: 'POINT (19.895610000000016 -34.47560000000003)',
          LOCATION_X: 19.89561,
          LOCATION_Y: -34.4756,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DE AAR',
          the_geom: 'POINT (24.005040000000022 -30.66060000000003)',
          LOCATION_X: 24.00504,
          LOCATION_Y: -30.6606,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELANDSKRAAL',
          the_geom: 'POINT (29.411980000000028 -24.715910000000022)',
          LOCATION_X: 29.41198,
          LOCATION_Y: -24.71591,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MECKLENBURG',
          the_geom: 'POINT (30.073590000000024 -24.386270000000025)',
          LOCATION_X: 30.07359,
          LOCATION_Y: -24.38627,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOERIESFONTEIN',
          the_geom: 'POINT (19.44893000000002 -30.955630000000028)',
          LOCATION_X: 19.44893,
          LOCATION_Y: -30.95563,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VERENA',
          the_geom: 'POINT (29.02751000000003 -25.482450000000025)',
          LOCATION_X: 29.02751,
          LOCATION_Y: -25.48245,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIETVLEI',
          the_geom: 'POINT (30.347410000000032 -29.179920000000028)',
          LOCATION_X: 30.34741,
          LOCATION_Y: -29.17992,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THABAZIMBI',
          the_geom: 'POINT (27.407750000000025 -24.597030000000025)',
          LOCATION_X: 27.40775,
          LOCATION_Y: -24.59703,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOPANONG',
          the_geom: 'POINT (26.253260000000022 -29.186440000000026)',
          LOCATION_X: 26.25326,
          LOCATION_Y: -29.18644,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAGISANONG',
          the_geom: 'POINT (26.235170000000025 -29.182930000000027)',
          LOCATION_X: 26.23517,
          LOCATION_Y: -29.18293,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RATANDA',
          the_geom: 'POINT (28.327850000000026 -26.553510000000024)',
          LOCATION_X: 28.32785,
          LOCATION_Y: -26.55351,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GERMISTON',
          the_geom: 'POINT (28.161740000000027 -26.217220000000022)',
          LOCATION_X: 28.16174,
          LOCATION_Y: -26.21722,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GREYLINGSTAD',
          the_geom: 'POINT (28.765450000000023 -26.742010000000025)',
          LOCATION_X: 28.76545,
          LOCATION_Y: -26.74201,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KIMBERLEY',
          the_geom: 'POINT (24.763200000000026 -28.734870000000022)',
          LOCATION_X: 24.7632,
          LOCATION_Y: -28.73487,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INT AIRP KING SHAKA',
          the_geom: 'POINT (31.10425000000003 -29.618440000000028)',
          LOCATION_X: 31.10425,
          LOCATION_Y: -29.61844,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BAINSVLEI',
          the_geom: 'POINT (26.128370000000025 -29.066130000000022)',
          LOCATION_X: 26.12837,
          LOCATION_Y: -29.06613,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BATHO',
          the_geom: 'POINT (26.225310000000025 -29.134680000000028)',
          LOCATION_X: 26.22531,
          LOCATION_Y: -29.13468,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BAYSWATER',
          the_geom: 'POINT (26.230330000000023 -29.08896000000003)',
          LOCATION_X: 26.23033,
          LOCATION_Y: -29.08896,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUNNOTTAR',
          the_geom: 'POINT (28.43880000000003 -26.351290000000024)',
          LOCATION_X: 28.4388,
          LOCATION_Y: -26.35129,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NIGEL',
          the_geom: 'POINT (28.472170000000027 -26.420760000000023)',
          LOCATION_X: 28.47217,
          LOCATION_Y: -26.42076,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BENONI',
          the_geom: 'POINT (28.313370000000027 -26.196550000000023)',
          LOCATION_X: 28.31337,
          LOCATION_Y: -26.19655,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STRAND',
          the_geom: 'POINT (18.832860000000018 -34.115920000000024)',
          LOCATION_X: 18.83286,
          LOCATION_Y: -34.11592,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NTAMBANANA',
          the_geom: 'POINT (31.74294000000003 -28.605020000000025)',
          LOCATION_X: 31.74294,
          LOCATION_Y: -28.60502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAGISO',
          the_geom: 'POINT (27.781620000000025 -26.164250000000024)',
          LOCATION_X: 27.78162,
          LOCATION_Y: -26.16425,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAGALIESBURG',
          the_geom: 'POINT (27.538670000000028 -25.997440000000022)',
          LOCATION_X: 27.53867,
          LOCATION_Y: -25.99744,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RANDFONTEIN',
          the_geom: 'POINT (27.70620000000003 -26.180760000000024)',
          LOCATION_X: 27.7062,
          LOCATION_Y: -26.18076,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MONTCLAIR',
          the_geom: 'POINT (30.973920000000028 -29.91872000000003)',
          LOCATION_X: 30.97392,
          LOCATION_Y: -29.91872,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DEVON',
          the_geom: 'POINT (28.786030000000025 -26.356300000000026)',
          LOCATION_X: 28.78603,
          LOCATION_Y: -26.3563,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GLUCKSTADT',
          the_geom: 'POINT (31.032100000000028 -27.975610000000028)',
          LOCATION_X: 31.0321,
          LOCATION_Y: -27.97561,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMBALENHLE',
          the_geom: 'POINT (29.07470000000003 -26.544920000000022)',
          LOCATION_X: 29.0747,
          LOCATION_Y: -26.54492,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NORTHAM',
          the_geom: 'POINT (27.264380000000028 -24.959900000000022)',
          LOCATION_X: 27.26438,
          LOCATION_Y: -24.9599,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LINGELETHU-WEST',
          the_geom: 'POINT (18.660040000000016 -34.042980000000036)',
          LOCATION_X: 18.66004,
          LOCATION_Y: -34.04298,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWANOBUHLE',
          the_geom: 'POINT (25.39782000000002 -33.81395000000003)',
          LOCATION_X: 25.39782,
          LOCATION_Y: -33.81395,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BATHURST',
          the_geom: 'POINT (26.839170000000024 -33.50484000000003)',
          LOCATION_X: 26.83917,
          LOCATION_Y: -33.50484,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOSHANGUVE',
          the_geom: 'POINT (28.11260000000003 -25.528700000000025)',
          LOCATION_X: 28.1126,
          LOCATION_Y: -25.5287,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROOT-DRAKENSTEIN',
          the_geom: 'POINT (18.977760000000018 -33.86616000000003)',
          LOCATION_X: 18.97776,
          LOCATION_Y: -33.86616,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUNDUMBILI',
          the_geom: 'POINT (31.402660000000026 -29.13495000000003)',
          LOCATION_X: 31.40266,
          LOCATION_Y: -29.13495,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BULWER',
          the_geom: 'POINT (29.769450000000028 -29.81180000000003)',
          LOCATION_X: 29.76945,
          LOCATION_Y: -29.8118,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CEZA',
          the_geom: 'POINT (31.37832000000003 -27.99503000000003)',
          LOCATION_X: 31.37832,
          LOCATION_Y: -27.99503,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SCHOEMANSDAL',
          the_geom: 'POINT (31.49894000000003 -25.682350000000024)',
          LOCATION_X: 31.49894,
          LOCATION_Y: -25.68235,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSHITALE',
          the_geom: 'POINT (29.989020000000025 -23.35999000000002)',
          LOCATION_X: 29.98902,
          LOCATION_Y: -23.35999,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HANKEY',
          the_geom: 'POINT (24.885280000000023 -33.832230000000024)',
          LOCATION_X: 24.88528,
          LOCATION_Y: -33.83223,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HUMANSDORP',
          the_geom: 'POINT (24.772750000000023 -34.02798000000003)',
          LOCATION_X: 24.77275,
          LOCATION_Y: -34.02798,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAREEDOUW',
          the_geom: 'POINT (24.29433000000002 -33.953860000000034)',
          LOCATION_X: 24.29433,
          LOCATION_Y: -33.95386,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KIRKWOOD',
          the_geom: 'POINT (25.444090000000024 -33.39892000000003)',
          LOCATION_X: 25.44409,
          LOCATION_Y: -33.39892,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STORMS RIVER',
          the_geom: 'POINT (23.88890000000002 -33.97407000000003)',
          LOCATION_X: 23.8889,
          LOCATION_Y: -33.97407,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALEXANDRA',
          the_geom: 'POINT (28.100890000000028 -26.105480000000025)',
          LOCATION_X: 28.10089,
          LOCATION_Y: -26.10548,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIRKIESDORP',
          the_geom: 'POINT (30.405690000000025 -27.174520000000022)',
          LOCATION_X: 30.40569,
          LOCATION_Y: -27.17452,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HIGHFLATS',
          the_geom: 'POINT (30.19238000000003 -30.25922000000003)',
          LOCATION_X: 30.19238,
          LOCATION_Y: -30.25922,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LADYBRAND',
          the_geom: 'POINT (27.456800000000026 -29.195910000000023)',
          LOCATION_X: 27.4568,
          LOCATION_Y: -29.19591,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOWBRAY',
          the_geom: 'POINT (18.472280000000016 -33.95012000000003)',
          LOCATION_X: 18.47228,
          LOCATION_Y: -33.95012,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOUT BAY',
          the_geom: 'POINT (18.356740000000016 -34.03052000000003)',
          LOCATION_X: 18.35674,
          LOCATION_Y: -34.03052,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOSHOF',
          the_geom: 'POINT (25.239670000000025 -28.540340000000022)',
          LOCATION_X: 25.23967,
          LOCATION_Y: -28.54034,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRANDFORT',
          the_geom: 'POINT (26.459130000000023 -28.70310000000003)',
          LOCATION_X: 26.45913,
          LOCATION_Y: -28.7031,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DEALESVILLE',
          the_geom: 'POINT (25.763790000000025 -28.676020000000026)',
          LOCATION_X: 25.76379,
          LOCATION_Y: -28.67602,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DEWETSDORP',
          the_geom: 'POINT (26.662460000000024 -29.58358000000003)',
          LOCATION_X: 26.66246,
          LOCATION_Y: -29.58358,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PLOOYSBURG',
          the_geom: 'POINT (24.237610000000025 -29.026450000000025)',
          LOCATION_X: 24.23761,
          LOCATION_Y: -29.02645,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WARRENTON',
          the_geom: 'POINT (24.848850000000024 -28.114890000000024)',
          LOCATION_X: 24.84885,
          LOCATION_Y: -28.11489,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WINDSORTON',
          the_geom: 'POINT (24.710820000000023 -28.326640000000022)',
          LOCATION_X: 24.71082,
          LOCATION_Y: -28.32664,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GLEN',
          the_geom: 'POINT (26.331990000000022 -28.939990000000027)',
          LOCATION_X: 26.33199,
          LOCATION_Y: -28.93999,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAGATLE',
          the_geom: 'POINT (29.41087000000003 -24.459950000000024)',
          LOCATION_X: 29.41087,
          LOCATION_Y: -24.45995,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEBO',
          the_geom: 'POINT (29.75343000000003 -24.867980000000024)',
          LOCATION_X: 29.75343,
          LOCATION_Y: -24.86798,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLOGOTLOU',
          the_geom: 'POINT (29.738370000000028 -25.02105000000002)',
          LOCATION_X: 29.73837,
          LOCATION_Y: -25.02105,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'APEL',
          the_geom: 'POINT (29.785910000000026 -24.42233000000002)',
          LOCATION_X: 29.78591,
          LOCATION_Y: -24.42233,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LETSITELE',
          the_geom: 'POINT (30.39214000000003 -23.89402000000002)',
          LOCATION_X: 30.39214,
          LOCATION_Y: -23.89402,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHALABORWA',
          the_geom: 'POINT (31.136080000000028 -23.95261000000002)',
          LOCATION_X: 31.13608,
          LOCATION_Y: -23.95261,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAALWATER',
          the_geom: 'POINT (28.113710000000026 -24.293600000000026)',
          LOCATION_X: 28.11371,
          LOCATION_Y: -24.2936,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BETHELSDORP',
          the_geom: 'POINT (25.512610000000024 -33.870620000000024)',
          LOCATION_X: 25.51261,
          LOCATION_Y: -33.87062,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DESPATCH',
          the_geom: 'POINT (25.472640000000023 -33.80317000000003)',
          LOCATION_X: 25.47264,
          LOCATION_Y: -33.80317,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TRICHARDT',
          the_geom: 'POINT (29.224080000000026 -26.493600000000026)',
          LOCATION_X: 29.22408,
          LOCATION_Y: -26.4936,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOLOMANE',
          the_geom: 'POINT (26.788830000000022 -32.422470000000025)',
          LOCATION_X: 26.78883,
          LOCATION_Y: -32.42247,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MTHATHA',
          the_geom: 'POINT (28.77164000000003 -31.581730000000032)',
          LOCATION_X: 28.77164,
          LOCATION_Y: -31.58173,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BALFOUR TVL',
          the_geom: 'POINT (28.586950000000027 -26.662820000000025)',
          LOCATION_X: 28.58695,
          LOCATION_Y: -26.66282,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KINROSS',
          the_geom: 'POINT (29.085080000000023 -26.415400000000027)',
          LOCATION_X: 29.08508,
          LOCATION_Y: -26.4154,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MASISI',
          the_geom: 'POINT (30.862610000000025 -22.42221000000002)',
          LOCATION_X: 30.86261,
          LOCATION_Y: -22.42221,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEALDTOWN',
          the_geom: 'POINT (26.649990000000024 -32.74839000000003)',
          LOCATION_X: 26.64999,
          LOCATION_Y: -32.74839,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRIGHTON BEACH',
          the_geom: 'POINT (31.006190000000032 -29.936490000000024)',
          LOCATION_X: 31.00619,
          LOCATION_Y: -29.93649,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALAMULELE',
          the_geom: 'POINT (30.686650000000032 -23.00452000000002)',
          LOCATION_X: 30.68665,
          LOCATION_Y: -23.00452,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NAMAHADI',
          the_geom: 'POINT (28.828410000000027 -28.583450000000028)',
          LOCATION_X: 28.82841,
          LOCATION_Y: -28.58345,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MONTAGU',
          the_geom: 'POINT (20.129670000000022 -33.78460000000004)',
          LOCATION_X: 20.12967,
          LOCATION_Y: -33.7846,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GELVANDALE',
          the_geom: 'POINT (25.55030000000002 -33.910550000000036)',
          LOCATION_X: 25.5503,
          LOCATION_Y: -33.91055,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAMIESKROON',
          the_geom: 'POINT (17.931590000000018 -30.213070000000027)',
          LOCATION_X: 17.93159,
          LOCATION_Y: -30.21307,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZONKIZIZWE',
          the_geom: 'POINT (28.17933000000003 -26.405970000000025)',
          LOCATION_X: 28.17933,
          LOCATION_Y: -26.40597,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOMMISSIEPOORT',
          the_geom: 'POINT (27.286570000000022 -29.324880000000025)',
          LOCATION_X: 27.28657,
          LOCATION_Y: -29.32488,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SILVERTON',
          the_geom: 'POINT (28.296320000000026 -25.733550000000022)',
          LOCATION_X: 28.29632,
          LOCATION_Y: -25.73355,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRONKHORSTSPRUIT',
          the_geom: 'POINT (28.745660000000022 -25.808980000000023)',
          LOCATION_X: 28.74566,
          LOCATION_Y: -25.80898,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CULLINAN',
          the_geom: 'POINT (28.520280000000025 -25.675280000000022)',
          LOCATION_X: 28.52028,
          LOCATION_Y: -25.67528,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAROLINA',
          the_geom: 'POINT (30.11998000000003 -26.071280000000023)',
          LOCATION_X: 30.11998,
          LOCATION_Y: -26.07128,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SILOAM',
          the_geom: 'POINT (30.186230000000023 -22.89731000000002)',
          LOCATION_X: 30.18623,
          LOCATION_Y: -22.89731,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KENTON ON SEA',
          the_geom: 'POINT (26.666740000000022 -33.68053000000003)',
          LOCATION_X: 26.66674,
          LOCATION_Y: -33.68053,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SABIE',
          the_geom: 'POINT (30.782070000000026 -25.095280000000024)',
          LOCATION_X: 30.78207,
          LOCATION_Y: -25.09528,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IDA',
          the_geom: 'POINT (27.551160000000024 -31.40925000000003)',
          LOCATION_X: 27.55116,
          LOCATION_Y: -31.40925,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALIWAL NORTH',
          the_geom: 'POINT (26.711030000000022 -30.687480000000026)',
          LOCATION_X: 26.71103,
          LOCATION_Y: -30.68748,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEDFORDVIEW',
          the_geom: 'POINT (28.13719000000003 -26.179600000000026)',
          LOCATION_X: 28.13719,
          LOCATION_Y: -26.1796,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BLINKPAN',
          the_geom: 'POINT (29.451080000000022 -26.099340000000023)',
          LOCATION_X: 29.45108,
          LOCATION_Y: -26.09934,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROBLERSDAL',
          the_geom: 'POINT (29.389600000000026 -25.165530000000025)',
          LOCATION_X: 29.3896,
          LOCATION_Y: -25.16553,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAARTENSHOOP',
          the_geom: 'POINT (30.234000000000034 -24.990790000000022)',
          LOCATION_X: 30.234,
          LOCATION_Y: -24.99079,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OGIES',
          the_geom: 'POINT (29.052720000000026 -26.050640000000023)',
          LOCATION_X: 29.05272,
          LOCATION_Y: -26.05064,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARA',
          the_geom: 'POINT (29.392790000000026 -23.090900000000026)',
          LOCATION_X: 29.39279,
          LOCATION_Y: -23.0909,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEYNSBURG',
          the_geom: 'POINT (25.823280000000025 -31.292840000000027)',
          LOCATION_X: 25.82328,
          LOCATION_Y: -31.29284,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BURGERSDORP',
          the_geom: 'POINT (26.332730000000023 -30.99708000000003)',
          LOCATION_X: 26.33273,
          LOCATION_Y: -30.99708,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIEPRIVIER',
          the_geom: 'POINT (18.464850000000016 -34.03161000000003)',
          LOCATION_X: 18.46485,
          LOCATION_Y: -34.03161,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FORT BEAUFORT',
          the_geom: 'POINT (26.635550000000023 -32.77701000000003)',
          LOCATION_X: 26.63555,
          LOCATION_Y: -32.77701,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KINKELBOS',
          the_geom: 'POINT (25.878270000000025 -33.646690000000035)',
          LOCATION_X: 25.87827,
          LOCATION_Y: -33.64669,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLAREMONT',
          the_geom: 'POINT (18.47286000000002 -33.984420000000036)',
          LOCATION_X: 18.47286,
          LOCATION_Y: -33.98442,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOTHUTLUNG',
          the_geom: 'POINT (27.887300000000028 -25.599750000000025)',
          LOCATION_X: 27.8873,
          LOCATION_Y: -25.59975,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAZAKELE',
          the_geom: 'POINT (25.583080000000024 -33.87626000000002)',
          LOCATION_X: 25.58308,
          LOCATION_Y: -33.87626,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MPISI',
          the_geom: 'POINT (29.93013000000003 -31.146580000000032)',
          LOCATION_X: 29.93013,
          LOCATION_Y: -31.14658,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GOWAN LEA',
          the_geom: 'POINT (29.70266000000003 -30.347420000000024)',
          LOCATION_X: 29.70266,
          LOCATION_Y: -30.34742,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHUMALANGA',
          the_geom: 'POINT (27.57751000000003 -30.57749000000003)',
          LOCATION_X: 27.57751,
          LOCATION_Y: -30.57749,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COFIMVABA',
          the_geom: 'POINT (27.584110000000024 -32.00375000000003)',
          LOCATION_X: 27.58411,
          LOCATION_Y: -32.00375,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRAMLEY',
          the_geom: 'POINT (28.084130000000023 -26.120790000000024)',
          LOCATION_X: 28.08413,
          LOCATION_Y: -26.12079,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MIDRAND',
          the_geom: 'POINT (28.12012000000003 -25.993210000000023)',
          LOCATION_X: 28.12012,
          LOCATION_Y: -25.99321,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SANDTON',
          the_geom: 'POINT (28.06150000000003 -26.080260000000024)',
          LOCATION_X: 28.0615,
          LOCATION_Y: -26.08026,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LINDEN',
          the_geom: 'POINT (27.99370000000003 -26.119220000000023)',
          LOCATION_X: 27.9937,
          LOCATION_Y: -26.11922,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELA-BELA',
          the_geom: 'POINT (28.294530000000027 -24.877510000000022)',
          LOCATION_X: 28.29453,
          LOCATION_Y: -24.87751,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MODJADJISKLOOF',
          the_geom: 'POINT (30.143850000000025 -23.69563000000002)',
          LOCATION_X: 30.14385,
          LOCATION_Y: -23.69563,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRAVELOTTE',
          the_geom: 'POINT (30.61256000000003 -23.95146000000002)',
          LOCATION_X: 30.61256,
          LOCATION_Y: -23.95146,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRESTBURY',
          the_geom: 'POINT (30.338220000000028 -29.606670000000026)',
          LOCATION_X: 30.33822,
          LOCATION_Y: -29.60667,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DALTON',
          the_geom: 'POINT (30.63626000000003 -29.34421000000003)',
          LOCATION_X: 30.63626,
          LOCATION_Y: -29.34421,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMATIMATOLO',
          the_geom: 'POINT (30.826590000000028 -29.141010000000026)',
          LOCATION_X: 30.82659,
          LOCATION_Y: -29.14101,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KRANSKOP',
          the_geom: 'POINT (30.864050000000027 -28.966040000000028)',
          LOCATION_X: 30.86405,
          LOCATION_Y: -28.96604,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LANGLAAGTE',
          the_geom: 'POINT (27.984470000000027 -26.208150000000025)',
          LOCATION_X: 27.98447,
          LOCATION_Y: -26.20815,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MONDEOR',
          the_geom: 'POINT (28.01003000000003 -26.276150000000023)',
          LOCATION_X: 28.01003,
          LOCATION_Y: -26.27615,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PROTEA GLEN',
          the_geom: 'POINT (27.838960000000025 -26.276970000000023)',
          LOCATION_X: 27.83896,
          LOCATION_Y: -26.27697,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SARON',
          the_geom: 'POINT (18.999440000000018 -33.18409000000003)',
          LOCATION_X: 18.99944,
          LOCATION_Y: -33.18409,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MABOPANE',
          the_geom: 'POINT (28.05750000000003 -25.511000000000028)',
          LOCATION_X: 28.0575,
          LOCATION_Y: -25.511,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUNNYSIDE',
          the_geom: 'POINT (28.20770000000003 -25.754440000000024)',
          LOCATION_X: 28.2077,
          LOCATION_Y: -25.75444,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLERKSKRAAL',
          the_geom: 'POINT (27.163390000000028 -26.251750000000023)',
          LOCATION_X: 27.16339,
          LOCATION_Y: -26.25175,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OR TAMBO INTERN AIRP',
          the_geom: 'POINT (28.229850000000024 -26.132930000000023)',
          LOCATION_X: 28.22985,
          LOCATION_Y: -26.13293,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MTUNZINI',
          the_geom: 'POINT (31.75453000000003 -28.95414000000003)',
          LOCATION_X: 31.75453,
          LOCATION_Y: -28.95414,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMPANGENI',
          the_geom: 'POINT (31.88623000000003 -28.745860000000032)',
          LOCATION_X: 31.88623,
          LOCATION_Y: -28.74586,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALMESBURY',
          the_geom: 'POINT (18.72971000000002 -33.453540000000025)',
          LOCATION_X: 18.72971,
          LOCATION_Y: -33.45354,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORTERVILLE',
          the_geom: 'POINT (18.992740000000015 -33.01164000000003)',
          LOCATION_X: 18.99274,
          LOCATION_Y: -33.01164,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SALDANHA',
          the_geom: 'POINT (17.939580000000017 -33.009620000000034)',
          LOCATION_X: 17.93958,
          LOCATION_Y: -33.00962,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEDFORD',
          the_geom: 'POINT (26.082750000000022 -32.68363000000003)',
          LOCATION_X: 26.08275,
          LOCATION_Y: -32.68363,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STERKSTROOM',
          the_geom: 'POINT (26.555980000000023 -31.550520000000027)',
          LOCATION_X: 26.55598,
          LOCATION_Y: -31.55052,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRAAFF-REINET',
          the_geom: 'POINT (24.53989000000002 -32.25286000000003)',
          LOCATION_X: 24.53989,
          LOCATION_Y: -32.25286,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIMBAZA',
          the_geom: 'POINT (27.205970000000022 -32.83365000000003)',
          LOCATION_X: 27.20597,
          LOCATION_Y: -32.83365,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELLIOTDALE',
          the_geom: 'POINT (28.683420000000023 -31.967780000000026)',
          LOCATION_X: 28.68342,
          LOCATION_Y: -31.96778,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LUSIKISIKI',
          the_geom: 'POINT (29.574990000000025 -31.368890000000025)',
          LOCATION_X: 29.57499,
          LOCATION_Y: -31.36889,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KHAYELITSHA',
          the_geom: 'POINT (18.66599000000002 -34.024640000000026)',
          LOCATION_X: 18.66599,
          LOCATION_Y: -34.02464,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WITBANK',
          the_geom: 'POINT (29.23129000000003 -25.887940000000025)',
          LOCATION_X: 29.23129,
          LOCATION_Y: -25.88794,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WOODSTOCK',
          the_geom: 'POINT (18.448140000000016 -33.92897000000003)',
          LOCATION_X: 18.44814,
          LOCATION_Y: -33.92897,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIVIERSONDEREND',
          the_geom: 'POINT (19.920370000000016 -34.15086000000004)',
          LOCATION_X: 19.92037,
          LOCATION_Y: -34.15086,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOMERSET WEST',
          the_geom: 'POINT (18.844660000000015 -34.07682000000003)',
          LOCATION_X: 18.84466,
          LOCATION_Y: -34.07682,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STRUISBAAI',
          the_geom: 'POINT (20.050880000000017 -34.800590000000035)',
          LOCATION_X: 20.05088,
          LOCATION_Y: -34.80059,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLOETESVILLE',
          the_geom: 'POINT (18.855260000000015 -33.92257000000003)',
          LOCATION_X: 18.85526,
          LOCATION_Y: -33.92257,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHARLESTOWN',
          the_geom: 'POINT (29.873550000000026 -27.415570000000024)',
          LOCATION_X: 29.87355,
          LOCATION_Y: -27.41557,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INGOGO',
          the_geom: 'POINT (29.91188000000003 -27.577370000000023)',
          LOCATION_X: 29.91188,
          LOCATION_Y: -27.57737,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WEPENER',
          the_geom: 'POINT (27.037000000000027 -29.731150000000028)',
          LOCATION_X: 27.037,
          LOCATION_Y: -29.73115,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CREIGHTON',
          the_geom: 'POINT (29.842840000000024 -30.029550000000025)',
          LOCATION_X: 29.84284,
          LOCATION_Y: -30.02955,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MZAMBA',
          the_geom: 'POINT (30.184370000000023 -31.07529000000003)',
          LOCATION_X: 30.18437,
          LOCATION_Y: -31.07529,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STERKSPRUIT',
          the_geom: 'POINT (27.371340000000025 -30.52837000000003)',
          LOCATION_X: 27.37134,
          LOCATION_Y: -30.52837,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSOMO',
          the_geom: 'POINT (27.818020000000026 -32.037070000000035)',
          LOCATION_X: 27.81802,
          LOCATION_Y: -32.03707,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMLAZI',
          the_geom: 'POINT (30.92848000000003 -29.962520000000026)',
          LOCATION_X: 30.92848,
          LOCATION_Y: -29.96252,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IKAMVELIHLE',
          the_geom: 'POINT (25.608430000000023 -33.79741000000003)',
          LOCATION_X: 25.60843,
          LOCATION_Y: -33.79741,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MBUZINI',
          the_geom: 'POINT (31.89291000000003 -25.821010000000022)',
          LOCATION_X: 31.89291,
          LOCATION_Y: -25.82101,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OUDTSHOORN',
          the_geom: 'POINT (22.20401000000002 -33.58986000000004)',
          LOCATION_X: 22.20401,
          LOCATION_Y: -33.58986,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UNIONDALE',
          the_geom: 'POINT (23.125820000000022 -33.65730000000003)',
          LOCATION_X: 23.12582,
          LOCATION_Y: -33.6573,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LADISMITH',
          the_geom: 'POINT (21.26830000000002 -33.49487000000003)',
          LOCATION_X: 21.2683,
          LOCATION_Y: -33.49487,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSHIDILAMOLOMO',
          the_geom: 'POINT (24.67348000000002 -25.826080000000022)',
          LOCATION_X: 24.67348,
          LOCATION_Y: -25.82608,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HUHUDI',
          the_geom: 'POINT (24.740530000000025 -26.966910000000023)',
          LOCATION_X: 24.74053,
          LOCATION_Y: -26.96691,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OTTOSDAL',
          the_geom: 'POINT (25.999910000000025 -26.812030000000025)',
          LOCATION_X: 25.99991,
          LOCATION_Y: -26.81203,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SULENKAMA',
          the_geom: 'POINT (28.684370000000026 -31.016880000000025)',
          LOCATION_X: 28.68437,
          LOCATION_Y: -31.01688,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COFFEE BAY',
          the_geom: 'POINT (29.148810000000022 -31.978480000000026)',
          LOCATION_X: 29.14881,
          LOCATION_Y: -31.97848,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAAIMAN',
          the_geom: 'POINT (28.978060000000028 -31.91920000000003)',
          LOCATION_X: 28.97806,
          LOCATION_Y: -31.9192,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WIERDABRUG',
          the_geom: 'POINT (28.155240000000028 -25.823740000000022)',
          LOCATION_X: 28.15524,
          LOCATION_Y: -25.82374,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ERASMIA',
          the_geom: 'POINT (28.092580000000023 -25.811770000000024)',
          LOCATION_X: 28.09258,
          LOCATION_Y: -25.81177,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ORANJEVILLE',
          the_geom: 'POINT (28.204460000000026 -26.989080000000026)',
          LOCATION_X: 28.20446,
          LOCATION_Y: -26.98908,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STILL BAY',
          the_geom: 'POINT (21.41184000000002 -34.377430000000025)',
          LOCATION_X: 21.41184,
          LOCATION_Y: -34.37743,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BUFFELSHOEK',
          the_geom: 'POINT (27.399910000000023 -26.802950000000024)',
          LOCATION_X: 27.39991,
          LOCATION_Y: -26.80295,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IKAGENG',
          the_geom: 'POINT (27.062470000000026 -26.72025000000003)',
          LOCATION_X: 27.06247,
          LOCATION_Y: -26.72025,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEEUDORINGSTAD',
          the_geom: 'POINT (26.241310000000023 -27.23507000000003)',
          LOCATION_X: 26.24131,
          LOCATION_Y: -27.23507,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKWASSIE',
          the_geom: 'POINT (25.993300000000026 -27.312680000000025)',
          LOCATION_X: 25.9933,
          LOCATION_Y: -27.31268,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WOLMARANSSTAD',
          the_geom: 'POINT (25.980180000000022 -27.201750000000025)',
          LOCATION_X: 25.98018,
          LOCATION_Y: -27.20175,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JOUBERTON',
          the_geom: 'POINT (26.587730000000025 -26.891840000000023)',
          LOCATION_X: 26.58773,
          LOCATION_Y: -26.89184,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COLIGNY',
          the_geom: 'POINT (26.317380000000025 -26.33070000000003)',
          LOCATION_X: 26.31738,
          LOCATION_Y: -26.3307,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THOHOYANDOU',
          the_geom: 'POINT (30.455940000000027 -22.97234000000002)',
          LOCATION_X: 30.45594,
          LOCATION_Y: -22.97234,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAINGSBURG',
          the_geom: 'POINT (20.85937000000002 -33.19758000000002)',
          LOCATION_X: 20.85937,
          LOCATION_Y: -33.19758,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FORT BROWN',
          the_geom: 'POINT (26.617730000000023 -33.129780000000025)',
          LOCATION_X: 26.61773,
          LOCATION_Y: -33.12978,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEVEN FOUNTAINS',
          the_geom: 'POINT (26.326100000000025 -33.44057000000004)',
          LOCATION_X: 26.3261,
          LOCATION_Y: -33.44057,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOMATIPOORT',
          the_geom: 'POINT (31.95774000000003 -25.436200000000024)',
          LOCATION_X: 31.95774,
          LOCATION_Y: -25.4362,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BARBERTON',
          the_geom: 'POINT (31.05178000000003 -25.790740000000024)',
          LOCATION_X: 31.05178,
          LOCATION_Y: -25.79074,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VOSBURG',
          the_geom: 'POINT (22.881400000000024 -30.573590000000028)',
          LOCATION_X: 22.8814,
          LOCATION_Y: -30.57359,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KABOKWENI',
          the_geom: 'POINT (31.129380000000026 -25.344390000000022)',
          LOCATION_X: 31.12938,
          LOCATION_Y: -25.34439,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOSHOEK',
          the_geom: 'POINT (24.283250000000024 -25.725930000000023)',
          LOCATION_X: 24.28325,
          LOCATION_Y: -25.72593,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRAY',
          the_geom: 'POINT (23.715700000000027 -25.457710000000024)',
          LOCATION_X: 23.7157,
          LOCATION_Y: -25.45771,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KURUMAN',
          the_geom: 'POINT (23.43229000000002 -27.459010000000024)',
          LOCATION_X: 23.43229,
          LOCATION_Y: -27.45901,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMANGUZI',
          the_geom: 'POINT (32.743480000000034 -26.998030000000025)',
          LOCATION_X: 32.74348,
          LOCATION_Y: -26.99803,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOUWSBURG',
          the_geom: 'POINT (31.28124000000003 -27.580690000000025)',
          LOCATION_X: 31.28124,
          LOCATION_Y: -27.58069,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUNDEE',
          the_geom: 'POINT (30.233680000000028 -28.162350000000025)',
          LOCATION_X: 30.23368,
          LOCATION_Y: -28.16235,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HATTINGSPRUIT',
          the_geom: 'POINT (30.124000000000034 -28.07920000000003)',
          LOCATION_X: 30.124,
          LOCATION_Y: -28.0792,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAUL ROUX',
          the_geom: 'POINT (27.953040000000026 -28.296860000000027)',
          LOCATION_X: 27.95304,
          LOCATION_Y: -28.29686,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TWEESPRUIT',
          the_geom: 'POINT (27.025130000000022 -29.186340000000026)',
          LOCATION_X: 27.02513,
          LOCATION_Y: -29.18634,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLARENS',
          the_geom: 'POINT (28.419830000000022 -28.515400000000028)',
          LOCATION_X: 28.41983,
          LOCATION_Y: -28.5154,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAFUBE',
          the_geom: 'POINT (28.503210000000024 -27.268380000000025)',
          LOCATION_X: 28.50321,
          LOCATION_Y: -27.26838,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MEMEL',
          the_geom: 'POINT (29.567030000000027 -27.681550000000026)',
          LOCATION_X: 29.56703,
          LOCATION_Y: -27.68155,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TWEELING',
          the_geom: 'POINT (28.515490000000025 -27.554400000000026)',
          LOCATION_X: 28.51549,
          LOCATION_Y: -27.5544,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BETHULIE',
          the_geom: 'POINT (25.976630000000025 -30.498870000000032)',
          LOCATION_X: 25.97663,
          LOCATION_Y: -30.49887,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROSEBANK',
          the_geom: 'POINT (28.038420000000027 -26.145380000000024)',
          LOCATION_X: 28.03842,
          LOCATION_Y: -26.14538,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THABA-NCHU',
          the_geom: 'POINT (26.843790000000027 -29.21120000000003)',
          LOCATION_X: 26.84379,
          LOCATION_Y: -29.2112,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NIEKERKSHOOP',
          the_geom: 'POINT (22.83759000000002 -29.326830000000026)',
          LOCATION_X: 22.83759,
          LOCATION_Y: -29.32683,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VRYHEID',
          the_geom: 'POINT (30.79561000000003 -27.767380000000028)',
          LOCATION_X: 30.79561,
          LOCATION_Y: -27.76738,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JOZINI',
          the_geom: 'POINT (32.06406000000003 -27.427150000000026)',
          LOCATION_X: 32.06406,
          LOCATION_Y: -27.42715,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAULPIETERSBURG',
          the_geom: 'POINT (30.817220000000027 -27.42332000000003)',
          LOCATION_X: 30.81722,
          LOCATION_Y: -27.42332,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HANOVER',
          the_geom: 'POINT (24.44393000000002 -31.066410000000026)',
          LOCATION_X: 24.44393,
          LOCATION_Y: -31.06641,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COLESBERG',
          the_geom: 'POINT (25.094460000000023 -30.71970000000003)',
          LOCATION_X: 25.09446,
          LOCATION_Y: -30.7197,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MURRAYSBURG',
          the_geom: 'POINT (23.76155000000002 -31.96489000000003)',
          LOCATION_X: 23.76155,
          LOCATION_Y: -31.96489,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAPE TOWN CENTRAL',
          the_geom: 'POINT (18.42310000000002 -33.927740000000036)',
          LOCATION_X: 18.4231,
          LOCATION_Y: -33.92774,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAMPS BAY',
          the_geom: 'POINT (18.376720000000017 -33.95604000000004)',
          LOCATION_X: 18.37672,
          LOCATION_Y: -33.95604,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAITLAND',
          the_geom: 'POINT (18.483250000000016 -33.92367000000004)',
          LOCATION_X: 18.48325,
          LOCATION_Y: -33.92367,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MILNERTON',
          the_geom: 'POINT (18.501750000000015 -33.87562000000003)',
          LOCATION_X: 18.50175,
          LOCATION_Y: -33.87562,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PINELANDS',
          the_geom: 'POINT (18.501370000000016 -33.926910000000035)',
          LOCATION_X: 18.50137,
          LOCATION_Y: -33.92691,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KENSINGTON',
          the_geom: 'POINT (18.510640000000016 -33.909530000000025)',
          LOCATION_X: 18.51064,
          LOCATION_Y: -33.90953,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RANKINS PASS',
          the_geom: 'POINT (27.91360000000003 -24.52865000000002)',
          LOCATION_X: 27.9136,
          LOCATION_Y: -24.52865,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRIXTON',
          the_geom: 'POINT (27.993550000000027 -26.192780000000024)',
          LOCATION_X: 27.99355,
          LOCATION_Y: -26.19278,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MULDERSDRIFT',
          the_geom: 'POINT (27.850520000000028 -26.038460000000022)',
          LOCATION_X: 27.85052,
          LOCATION_Y: -26.03846,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LYTTELTON',
          the_geom: 'POINT (28.198680000000024 -25.839040000000022)',
          LOCATION_X: 28.19868,
          LOCATION_Y: -25.83904,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAMONTVILLE',
          the_geom: 'POINT (30.939230000000027 -29.94046000000003)',
          LOCATION_X: 30.93923,
          LOCATION_Y: -29.94046,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HILLCREST',
          the_geom: 'POINT (30.76489000000003 -29.784270000000028)',
          LOCATION_X: 30.76489,
          LOCATION_Y: -29.78427,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALVERN',
          the_geom: 'POINT (30.910170000000026 -29.874560000000024)',
          LOCATION_X: 30.91017,
          LOCATION_Y: -29.87456,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ULUNDI',
          the_geom: 'POINT (31.428270000000026 -28.295900000000024)',
          LOCATION_X: 31.42827,
          LOCATION_Y: -28.2959,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NAMAKGALE',
          the_geom: 'POINT (31.02834000000003 -23.93300000000002)',
          LOCATION_X: 31.02834,
          LOCATION_Y: -23.933,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOOIPLAAS',
          the_geom: 'POINT (28.052250000000022 -32.73830000000003)',
          LOCATION_X: 28.05225,
          LOCATION_Y: -32.7383,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOFMEYR',
          the_geom: 'POINT (25.802210000000024 -31.655930000000026)',
          LOCATION_X: 25.80221,
          LOCATION_Y: -31.65593,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JEFFREYS BAY',
          the_geom: 'POINT (24.921920000000025 -34.05530000000004)',
          LOCATION_X: 24.92192,
          LOCATION_Y: -34.0553,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEI BRIDGE',
          the_geom: 'POINT (27.97953000000003 -32.50557000000003)',
          LOCATION_X: 27.97953,
          LOCATION_Y: -32.50557,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DOUGLAS',
          the_geom: 'POINT (23.772780000000022 -29.056510000000024)',
          LOCATION_X: 23.77278,
          LOCATION_Y: -29.05651,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SWARTKOPS',
          the_geom: 'POINT (25.604430000000022 -33.851360000000035)',
          LOCATION_X: 25.60443,
          LOCATION_Y: -33.85136,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DORINGKLOOF',
          the_geom: 'POINT (26.514630000000025 -32.45969000000004)',
          LOCATION_X: 26.51463,
          LOCATION_Y: -32.45969,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'POINT',
          the_geom: 'POINT (31.039830000000027 -29.861890000000027)',
          LOCATION_X: 31.03983,
          LOCATION_Y: -29.86189,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WILLOWMORE',
          the_geom: 'POINT (23.48728000000002 -33.29543000000003)',
          LOCATION_X: 23.48728,
          LOCATION_Y: -33.29543,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOUNT ROAD',
          the_geom: 'POINT (25.595160000000025 -33.954940000000036)',
          LOCATION_X: 25.59516,
          LOCATION_Y: -33.95494,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KABEGA PARK',
          the_geom: 'POINT (25.498490000000025 -33.93989000000003)',
          LOCATION_X: 25.49849,
          LOCATION_Y: -33.93989,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WALMER',
          the_geom: 'POINT (25.584830000000025 -33.97903000000004)',
          LOCATION_X: 25.58483,
          LOCATION_Y: -33.97903,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HUMEWOOD',
          the_geom: 'POINT (25.626170000000023 -33.97403000000003)',
          LOCATION_X: 25.62617,
          LOCATION_Y: -33.97403,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WESTONARIA',
          the_geom: 'POINT (27.650580000000026 -26.323000000000025)',
          LOCATION_X: 27.65058,
          LOCATION_Y: -26.323,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VEREENIGING',
          the_geom: 'POINT (27.92999000000003 -26.679310000000026)',
          LOCATION_X: 27.92999,
          LOCATION_Y: -26.67931,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VANDERBIJLPARK',
          the_geom: 'POINT (27.833060000000028 -26.698970000000024)',
          LOCATION_X: 27.83306,
          LOCATION_Y: -26.69897,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ORKNEY',
          the_geom: 'POINT (26.669940000000025 -26.977810000000023)',
          LOCATION_X: 26.66994,
          LOCATION_Y: -26.97781,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BLOEMHOF',
          the_geom: 'POINT (25.606850000000023 -27.652560000000022)',
          LOCATION_X: 25.60685,
          LOCATION_Y: -27.65256,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RANDBURG',
          the_geom: 'POINT (27.99700000000003 -26.076500000000028)',
          LOCATION_X: 27.997,
          LOCATION_Y: -26.0765,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TROMPSBURG',
          the_geom: 'POINT (25.780740000000023 -30.033720000000027)',
          LOCATION_X: 25.78074,
          LOCATION_Y: -30.03372,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HAMMARSDALE',
          the_geom: 'POINT (30.65611000000003 -29.79570000000003)',
          LOCATION_X: 30.65611,
          LOCATION_Y: -29.7957,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MBAZWANA',
          the_geom: 'POINT (32.59923000000003 -27.480810000000027)',
          LOCATION_X: 32.59923,
          LOCATION_Y: -27.48081,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SELOSESHA',
          the_geom: 'POINT (26.819390000000023 -29.194240000000022)',
          LOCATION_X: 26.81939,
          LOCATION_Y: -29.19424,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BARKLY WEST',
          the_geom: 'POINT (24.525330000000025 -28.537150000000025)',
          LOCATION_X: 24.52533,
          LOCATION_Y: -28.53715,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELMONT',
          the_geom: 'POINT (24.366470000000024 -29.416780000000028)',
          LOCATION_X: 24.36647,
          LOCATION_Y: -29.41678,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOETSAP',
          the_geom: 'POINT (24.45268000000002 -27.976100000000027)',
          LOCATION_X: 24.45268,
          LOCATION_Y: -27.9761,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAMPBELL',
          the_geom: 'POINT (23.71662000000002 -28.803200000000032)',
          LOCATION_X: 23.71662,
          LOCATION_Y: -28.8032,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WAKKERSTROOM',
          the_geom: 'POINT (30.148400000000034 -27.357120000000027)',
          LOCATION_X: 30.1484,
          LOCATION_Y: -27.35712,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MANDENI',
          the_geom: 'POINT (31.41142000000003 -29.154790000000023)',
          LOCATION_X: 31.41142,
          LOCATION_Y: -29.15479,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARRISMITH',
          the_geom: 'POINT (29.127860000000027 -28.26961000000003)',
          LOCATION_X: 29.12786,
          LOCATION_Y: -28.26961,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRETORIA MOOT',
          the_geom: 'POINT (28.216850000000026 -25.712950000000024)',
          LOCATION_X: 28.21685,
          LOCATION_Y: -25.71295,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DELFT',
          the_geom: 'POINT (18.642090000000017 -33.975020000000036)',
          LOCATION_X: 18.64209,
          LOCATION_Y: -33.97502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TAYLORS HALT',
          the_geom: 'POINT (30.190950000000026 -29.683050000000026)',
          LOCATION_X: 30.19095,
          LOCATION_Y: -29.68305,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BETHANIE',
          the_geom: 'POINT (27.601390000000023 -25.551750000000023)',
          LOCATION_X: 27.60139,
          LOCATION_Y: -25.55175,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSESENG',
          the_geom: 'POINT (28.853960000000026 -28.620380000000022)',
          LOCATION_X: 28.85396,
          LOCATION_Y: -28.62038,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKWANE',
          the_geom: 'POINT (28.880450000000028 -28.532110000000028)',
          LOCATION_X: 28.88045,
          LOCATION_Y: -28.53211,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SHARPEVILLE',
          the_geom: 'POINT (27.878010000000028 -26.681330000000024)',
          LOCATION_X: 27.87801,
          LOCATION_Y: -26.68133,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ENNERDALE',
          the_geom: 'POINT (27.832250000000023 -26.403920000000024)',
          LOCATION_X: 27.83225,
          LOCATION_Y: -26.40392,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELLVILLE',
          the_geom: 'POINT (18.622100000000017 -33.902060000000034)',
          LOCATION_X: 18.6221,
          LOCATION_Y: -33.90206,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MMAMETLAKE',
          the_geom: 'POINT (28.54310000000003 -25.105040000000024)',
          LOCATION_X: 28.5431,
          LOCATION_Y: -25.10504,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHUTHADITJHABA',
          the_geom: 'POINT (28.826560000000025 -28.515240000000027)',
          LOCATION_X: 28.82656,
          LOCATION_Y: -28.51524,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ASSEN',
          the_geom: 'POINT (27.60201000000003 -25.16766000000002)',
          LOCATION_X: 27.60201,
          LOCATION_Y: -25.16766,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LETHLABILE',
          the_geom: 'POINT (27.837810000000022 -25.495010000000025)',
          LOCATION_X: 27.83781,
          LOCATION_Y: -25.49501,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIEBEECK EAST',
          the_geom: 'POINT (26.152760000000022 -33.203410000000034)',
          LOCATION_X: 26.15276,
          LOCATION_Y: -33.20341,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KROONSTAD',
          the_geom: 'POINT (27.234680000000022 -27.668930000000024)',
          LOCATION_X: 27.23468,
          LOCATION_Y: -27.66893,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LICHTENBURG',
          the_geom: 'POINT (26.158890000000024 -26.151370000000025)',
          LOCATION_X: 26.15889,
          LOCATION_Y: -26.15137,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AGGENEYS',
          the_geom: 'POINT (18.847130000000018 -29.242060000000027)',
          LOCATION_X: 18.84713,
          LOCATION_Y: -29.24206,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARBURG',
          the_geom: 'POINT (30.73780000000003 -29.412410000000026)',
          LOCATION_X: 30.7378,
          LOCATION_Y: -29.41241,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NABABEEP',
          the_geom: 'POINT (17.78590000000002 -29.587750000000028)',
          LOCATION_X: 17.7859,
          LOCATION_Y: -29.58775,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NGOME',
          the_geom: 'POINT (31.38986000000003 -27.832840000000026)',
          LOCATION_X: 31.38986,
          LOCATION_Y: -27.83284,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARTBEESFONTEIN',
          the_geom: 'POINT (26.426180000000024 -26.758170000000025)',
          LOCATION_X: 26.42618,
          LOCATION_Y: -26.75817,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VERKYKERSKOP',
          the_geom: 'POINT (29.281020000000026 -27.919640000000026)',
          LOCATION_X: 29.28102,
          LOCATION_Y: -27.91964,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FAURESMITH',
          the_geom: 'POINT (25.311220000000024 -29.746490000000023)',
          LOCATION_X: 25.31122,
          LOCATION_Y: -29.74649,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GARIEPDAM',
          the_geom: 'POINT (25.491780000000023 -30.59130000000003)',
          LOCATION_X: 25.49178,
          LOCATION_Y: -30.5913,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ESTCOURT',
          the_geom: 'POINT (29.872190000000028 -29.005660000000027)',
          LOCATION_X: 29.87219,
          LOCATION_Y: -29.00566,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKUYA',
          the_geom: 'POINT (30.82752000000003 -22.652480000000022)',
          LOCATION_X: 30.82752,
          LOCATION_Y: -22.65248,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STANDERTON',
          the_geom: 'POINT (29.241470000000028 -26.946460000000023)',
          LOCATION_X: 29.24147,
          LOCATION_Y: -26.94646,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SIMONS TOWN',
          the_geom: 'POINT (18.436590000000017 -34.193130000000025)',
          LOCATION_X: 18.43659,
          LOCATION_Y: -34.19313,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NDUMO',
          the_geom: 'POINT (32.264910000000036 -26.920100000000026)',
          LOCATION_X: 32.26491,
          LOCATION_Y: -26.9201,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KUILSRIVIER',
          the_geom: 'POINT (18.68250000000002 -33.93231000000003)',
          LOCATION_X: 18.6825,
          LOCATION_Y: -33.93231,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEHURUTSHE',
          the_geom: 'POINT (25.985170000000025 -25.487800000000025)',
          LOCATION_X: 25.98517,
          LOCATION_Y: -25.4878,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOTSWEDI',
          the_geom: 'POINT (25.885580000000022 -25.277290000000022)',
          LOCATION_X: 25.88558,
          LOCATION_Y: -25.27729,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TOUWS RIVER',
          the_geom: 'POINT (20.031790000000015 -33.339270000000035)',
          LOCATION_X: 20.03179,
          LOCATION_Y: -33.33927,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUURBRAAK',
          the_geom: 'POINT (20.65400000000002 -34.00460000000004)',
          LOCATION_X: 20.654,
          LOCATION_Y: -34.0046,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RAWSONVILLE',
          the_geom: 'POINT (19.309080000000016 -33.68464000000004)',
          LOCATION_X: 19.30908,
          LOCATION_Y: -33.68464,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DA GAMASKOP',
          the_geom: 'POINT (22.11733000000002 -34.17631000000003)',
          LOCATION_X: 22.11733,
          LOCATION_Y: -34.17631,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEEU GAMKA',
          the_geom: 'POINT (21.97303000000002 -32.77896000000003)',
          LOCATION_X: 21.97303,
          LOCATION_Y: -32.77896,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THEMBALETHU',
          the_geom: 'POINT (22.48547000000002 -34.003410000000024)',
          LOCATION_X: 22.48547,
          LOCATION_Y: -34.00341,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWANONQABA',
          the_geom: 'POINT (22.09112000000002 -34.17612000000003)',
          LOCATION_X: 22.09112,
          LOCATION_Y: -34.17612,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWANOKUTHULA',
          the_geom: 'POINT (23.32062000000002 -34.053590000000035)',
          LOCATION_X: 23.32062,
          LOCATION_Y: -34.05359,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CONVILLE',
          the_geom: 'POINT (22.47327000000002 -33.98272002000004)',
          LOCATION_X: 22.47327,
          LOCATION_Y: -33.98272,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PATERSON',
          the_geom: 'POINT (25.969830000000023 -33.439780000000034)',
          LOCATION_X: 25.96983,
          LOCATION_Y: -33.43978,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLAWER',
          the_geom: 'POINT (18.625120000000017 -31.772220000000026)',
          LOCATION_X: 18.62512,
          LOCATION_Y: -31.77222,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAMBERTSBAAI',
          the_geom: 'POINT (18.305410000000016 -32.092510000000026)',
          LOCATION_X: 18.30541,
          LOCATION_Y: -32.09251,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PATENSIE',
          the_geom: 'POINT (24.815770000000025 -33.75645000000004)',
          LOCATION_X: 24.81577,
          LOCATION_Y: -33.75645,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MBIZENI',
          the_geom: 'POINT (28.361880000000028 -30.75569000000003)',
          LOCATION_X: 28.36188,
          LOCATION_Y: -30.75569,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ACTONVILLE',
          the_geom: 'POINT (28.299750000000028 -26.211980000000025)',
          LOCATION_X: 28.29975,
          LOCATION_Y: -26.21198,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSOLO',
          the_geom: 'POINT (28.758580000000027 -31.311380000000028)',
          LOCATION_X: 28.75858,
          LOCATION_Y: -31.31138,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSEKI',
          the_geom: 'POINT (28.77262000000003 -28.584290000000024)',
          LOCATION_X: 28.77262,
          LOCATION_Y: -28.58429,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JANSENVILLE',
          the_geom: 'POINT (24.66876000000002 -32.94236000000003)',
          LOCATION_X: 24.66876,
          LOCATION_Y: -32.94236,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHUNGWA',
          the_geom: 'POINT (27.156120000000023 -32.83898000000003)',
          LOCATION_X: 27.15612,
          LOCATION_Y: -32.83898,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TYEFU',
          the_geom: 'POINT (26.904610000000023 -33.126680000000036)',
          LOCATION_X: 26.90461,
          LOCATION_Y: -33.12668,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HAMBURG',
          the_geom: 'POINT (27.467110000000023 -33.288970000000035)',
          LOCATION_X: 27.46711,
          LOCATION_Y: -33.28897,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHALUMNA',
          the_geom: 'POINT (27.539950000000026 -33.13694000000003)',
          LOCATION_X: 27.53995,
          LOCATION_Y: -33.13694,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEA POINT',
          the_geom: 'POINT (18.399460000000015 -33.905530000000034)',
          LOCATION_X: 18.39946,
          LOCATION_Y: -33.90553,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEBAYENG',
          the_geom: 'POINT (29.69293333000003 -23.781327780000026)',
          LOCATION_X: 29.6929333,
          LOCATION_Y: -23.781327,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EDENVILLE',
          the_geom: 'POINT (27.67408000000003 -27.555350000000026)',
          LOCATION_X: 27.67408,
          LOCATION_Y: -27.55535,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEILBRON',
          the_geom: 'POINT (27.967070000000025 -27.282790000000023)',
          LOCATION_X: 27.96707,
          LOCATION_Y: -27.28279,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZAMUXOLO',
          the_geom: 'POINT (28.266950000000026 -30.590530000000026)',
          LOCATION_X: 28.26695,
          LOCATION_Y: -30.59053,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TABASE',
          the_geom: 'POINT (28.319330000000026 -30.525850000000027)',
          LOCATION_X: 28.31933,
          LOCATION_Y: -30.52585,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KATKOP',
          the_geom: 'POINT (28.51182000000003 -30.88541000000003)',
          LOCATION_X: 28.51182,
          LOCATION_Y: -30.88541,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AVONDALE',
          the_geom: 'POINT (28.404480000000028 -30.297510000000027)',
          LOCATION_X: 28.40448,
          LOCATION_Y: -30.29751,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AFSONDERING',
          the_geom: 'POINT (28.961450000000028 -30.165020000000027)',
          LOCATION_X: 28.96145,
          LOCATION_Y: -30.16502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MACLEANTOWN',
          the_geom: 'POINT (27.744660000000025 -32.786860000000026)',
          LOCATION_X: 27.74466,
          LOCATION_Y: -32.78686,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DELMAS',
          the_geom: 'POINT (28.687560000000026 -26.145120000000023)',
          LOCATION_X: 28.68756,
          LOCATION_Y: -26.14512,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BITYI',
          the_geom: 'POINT (28.533750000000023 -31.80929000000003)',
          LOCATION_X: 28.53375,
          LOCATION_Y: -31.80929,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LIBODE',
          the_geom: 'POINT (29.015520000000024 -31.539670000000026)',
          LOCATION_X: 29.01552,
          LOCATION_Y: -31.53967,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'QUMBU',
          the_geom: 'POINT (28.872660000000028 -31.16497000000003)',
          LOCATION_X: 28.87266,
          LOCATION_Y: -31.16497,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NUWERUS',
          the_geom: 'POINT (18.357120000000016 -31.149680000000032)',
          LOCATION_X: 18.35712,
          LOCATION_Y: -31.14968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VANRHYNSDORP',
          the_geom: 'POINT (18.740010000000016 -31.608300000000032)',
          LOCATION_X: 18.74001,
          LOCATION_Y: -31.6083,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CALVINIA',
          the_geom: 'POINT (19.773370000000018 -31.47331000000003)',
          LOCATION_X: 19.77337,
          LOCATION_Y: -31.47331,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOPETOWN',
          the_geom: 'POINT (24.08728000000002 -29.61956000000003)',
          LOCATION_X: 24.08728,
          LOCATION_Y: -29.61956,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEREA',
          the_geom: 'POINT (31.00409000000003 -29.848130000000026)',
          LOCATION_X: 31.00409,
          LOCATION_Y: -29.84813,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AUGRABIES',
          the_geom: 'POINT (20.42250000000002 -28.669080000000026)',
          LOCATION_X: 20.4225,
          LOCATION_Y: -28.66908,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JABULANI',
          the_geom: 'POINT (27.858300000000025 -26.248200000000026)',
          LOCATION_X: 27.8583,
          LOCATION_Y: -26.2482,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WRENCHVILLE',
          the_geom: 'POINT (23.46428000000002 -27.452750000000023)',
          LOCATION_X: 23.46428,
          LOCATION_Y: -27.45275,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UPINGTON',
          the_geom: 'POINT (21.25989000000002 -28.450190000000028)',
          LOCATION_X: 21.25989,
          LOCATION_Y: -28.45019,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WITDRAAI',
          the_geom: 'POINT (20.70580000000002 -26.955740000000027)',
          LOCATION_X: 20.7058,
          LOCATION_Y: -26.95574,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'POFADDER',
          the_geom: 'POINT (19.39496000000002 -29.125860000000028)',
          LOCATION_X: 19.39496,
          LOCATION_Y: -29.12586,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROBLERSHOOP',
          the_geom: 'POINT (21.98261000000002 -28.893110000000025)',
          LOCATION_X: 21.98261,
          LOCATION_Y: -28.89311,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KANONEILAND',
          the_geom: 'POINT (21.08695000000002 -28.652360000000026)',
          LOCATION_X: 21.08695,
          LOCATION_Y: -28.65236,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEIMOES',
          the_geom: 'POINT (20.97055000000002 -28.70806000000003)',
          LOCATION_X: 20.97055,
          LOCATION_Y: -28.70806,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELFAST',
          the_geom: 'POINT (30.04588000000003 -25.701440000000023)',
          LOCATION_X: 30.04588,
          LOCATION_Y: -25.70144,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARGATE',
          the_geom: 'POINT (30.364150000000027 -30.863590000000027)',
          LOCATION_X: 30.36415,
          LOCATION_Y: -30.86359,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALICEDALE',
          the_geom: 'POINT (26.085140000000024 -33.31668000000003)',
          LOCATION_X: 26.08514,
          LOCATION_Y: -33.31668,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOEDSPRUIT',
          the_geom: 'POINT (30.95114000000003 -24.353830000000023)',
          LOCATION_X: 30.95114,
          LOCATION_Y: -24.35383,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PALMIETFONTEIN',
          the_geom: 'POINT (27.541810000000027 -30.42178000000003)',
          LOCATION_X: 27.54181,
          LOCATION_Y: -30.42178,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELHAR',
          the_geom: 'POINT (18.648770000000017 -33.94692000000003)',
          LOCATION_X: 18.64877,
          LOCATION_Y: -33.94692,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THOMAS RIVER',
          the_geom: 'POINT (27.253080000000022 -32.45155000000003)',
          LOCATION_X: 27.25308,
          LOCATION_Y: -32.45155,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TYLDEN',
          the_geom: 'POINT (27.070600000000027 -32.11508000000003)',
          LOCATION_X: 27.0706,
          LOCATION_Y: -32.11508,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOGSBACK',
          the_geom: 'POINT (26.936960000000028 -32.600570000000026)',
          LOCATION_X: 26.93696,
          LOCATION_Y: -32.60057,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLIPTOWN',
          the_geom: 'POINT (27.888380000000026 -26.282290000000025)',
          LOCATION_X: 27.88838,
          LOCATION_Y: -26.28229,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWANDENGANE',
          the_geom: 'POINT (29.758140000000026 -31.05497900000003)',
          LOCATION_X: 29.75814,
          LOCATION_Y: -31.054979,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JOZA',
          the_geom: 'POINT (26.570810000000023 -33.284780000000026)',
          LOCATION_X: 26.57081,
          LOCATION_Y: -33.28478,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NTABETHEMBA',
          the_geom: 'POINT (26.480290000000025 -32.031710000000025)',
          LOCATION_X: 26.48029,
          LOCATION_Y: -32.03171,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THORNHILL CISKEI',
          the_geom: 'POINT (26.608900000000027 -31.98433000000003)',
          LOCATION_X: 26.6089,
          LOCATION_Y: -31.98433,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NGANGELIZWE',
          the_geom: 'POINT (28.795720000000028 -31.605320000000027)',
          LOCATION_X: 28.79572,
          LOCATION_Y: -31.60532,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TINA FALLS',
          the_geom: 'POINT (29.021870000000025 -31.22086000000003)',
          LOCATION_X: 29.02187,
          LOCATION_Y: -31.22086,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORT ST JOHNS',
          the_geom: 'POINT (29.544240000000027 -31.62894000000003)',
          LOCATION_X: 29.54424,
          LOCATION_Y: -31.62894,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAN REENEN',
          the_geom: 'POINT (29.385610000000028 -28.378720000000026)',
          LOCATION_X: 29.38561,
          LOCATION_Y: -28.37872,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIETFONTEIN',
          the_geom: 'POINT (20.029400000000024 -26.742690000000028)',
          LOCATION_X: 20.0294,
          LOCATION_Y: -26.74269,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOIPATONG',
          the_geom: 'POINT (27.843440000000022 -26.669590000000024)',
          LOCATION_X: 27.84344,
          LOCATION_Y: -26.66959,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ONSEEPKANS',
          the_geom: 'POINT (19.303950000000018 -28.741540000000022)',
          LOCATION_X: 19.30395,
          LOCATION_Y: -28.74154,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAMHLANGA',
          the_geom: 'POINT (28.715770000000028 -25.43404000000002)',
          LOCATION_X: 28.71577,
          LOCATION_Y: -25.43404,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEKPOORT',
          the_geom: 'POINT (27.618170000000028 -25.896100000000025)',
          LOCATION_X: 27.61817,
          LOCATION_Y: -25.8961,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JOUBERTINA',
          the_geom: 'POINT (23.85546000000002 -33.82652000000002)',
          LOCATION_X: 23.85546,
          LOCATION_Y: -33.82652,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSHILWAVHUSIKU',
          the_geom: 'POINT (29.74204000000003 -23.095990000000025)',
          LOCATION_X: 29.74204,
          LOCATION_Y: -23.09599,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WESTVILLE',
          the_geom: 'POINT (30.932460000000027 -29.82968000000003)',
          LOCATION_X: 30.93246,
          LOCATION_Y: -29.82968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ESIKHAWINI',
          the_geom: 'POINT (31.90505000000003 -28.874870000000026)',
          LOCATION_X: 31.90505,
          LOCATION_Y: -28.87487,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MIDDELBURG(EC)',
          the_geom: 'POINT (25.006110000000024 -31.49245000000003)',
          LOCATION_X: 25.00611,
          LOCATION_Y: -31.49245,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MQANDULI',
          the_geom: 'POINT (28.762910000000026 -31.81916000000003)',
          LOCATION_X: 28.76291,
          LOCATION_Y: -31.81916,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DONNYBROOK',
          the_geom: 'POINT (29.879380000000026 -29.929820000000024)',
          LOCATION_X: 29.87938,
          LOCATION_Y: -29.92982,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMZINONI',
          the_geom: 'POINT (29.445930000000022 -26.484560000000023)',
          LOCATION_X: 29.44593,
          LOCATION_Y: -26.48456,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NTABAMHLOPHE',
          the_geom: 'POINT (29.60860000000003 -29.103120000000025)',
          LOCATION_X: 29.6086,
          LOCATION_Y: -29.10312,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AMERSFOORT',
          the_geom: 'POINT (29.87218000000003 -27.008690000000023)',
          LOCATION_X: 29.87218,
          LOCATION_Y: -27.00869,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INANDA',
          the_geom: 'POINT (30.933510000000027 -29.69680000000003)',
          LOCATION_X: 30.93351,
          LOCATION_Y: -29.6968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOOINOOI',
          the_geom: 'POINT (27.55002000000003 -25.759480000000025)',
          LOCATION_X: 27.55002,
          LOCATION_Y: -25.75948,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRINCE ALFRED HAMLET',
          the_geom: 'POINT (19.32863000000002 -33.29353000000003)',
          LOCATION_X: 19.32863,
          LOCATION_Y: -33.29353,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GLENDALE',
          the_geom: 'POINT (31.110370000000028 -29.327630000000028)',
          LOCATION_X: 31.11037,
          LOCATION_Y: -29.32763,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MKHUZE',
          the_geom: 'POINT (32.031080000000024 -27.622580000000024)',
          LOCATION_X: 32.03108,
          LOCATION_Y: -27.62258,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JERICHO',
          the_geom: 'POINT (27.814520000000027 -25.343010000000024)',
          LOCATION_X: 27.81452,
          LOCATION_Y: -25.34301,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DE DOORNS',
          the_geom: 'POINT (19.665810000000018 -33.47424000000003)',
          LOCATION_X: 19.66581,
          LOCATION_Y: -33.47424,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NORMANDIEN',
          the_geom: 'POINT (29.780670000000026 -27.986560000000026)',
          LOCATION_X: 29.78067,
          LOCATION_Y: -27.98656,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLAPMUTS',
          the_geom: 'POINT (18.86272000000002 -33.806790000000035)',
          LOCATION_X: 18.86272,
          LOCATION_Y: -33.80679,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARDING',
          the_geom: 'POINT (29.88243000000003 -30.574990000000028)',
          LOCATION_X: 29.88243,
          LOCATION_Y: -30.57499,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MSINSINI',
          the_geom: 'POINT (30.518740000000026 -30.493650000000027)',
          LOCATION_X: 30.51874,
          LOCATION_Y: -30.49365,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BUFFALO FLATS',
          the_geom: 'POINT (27.860270000000025 -33.02401000000003)',
          LOCATION_X: 27.86027,
          LOCATION_Y: -33.02401,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROSENDAL',
          the_geom: 'POINT (27.930200000000028 -28.504060000000027)',
          LOCATION_X: 27.9302,
          LOCATION_Y: -28.50406,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WINBURG',
          the_geom: 'POINT (27.009600000000027 -28.521630000000027)',
          LOCATION_X: 27.0096,
          LOCATION_Y: -28.52163,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DEBEN',
          the_geom: 'POINT (22.88325000000002 -27.598200000000027)',
          LOCATION_X: 22.88325,
          LOCATION_Y: -27.5982,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAROW',
          the_geom: 'POINT (18.59561000000002 -33.90469000000003)',
          LOCATION_X: 18.59561,
          LOCATION_Y: -33.90469,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLIPGAT',
          the_geom: 'POINT (27.984340000000028 -25.473040000000022)',
          LOCATION_X: 27.98434,
          LOCATION_Y: -25.47304,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUBE',
          the_geom: 'POINT (28.02384000000003 -25.405020000000025)',
          LOCATION_X: 28.02384,
          LOCATION_Y: -25.40502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TEMBA',
          the_geom: 'POINT (28.260370000000027 -25.38881000000002)',
          LOCATION_X: 28.26037,
          LOCATION_Y: -25.38881,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMZIMKHULU',
          the_geom: 'POINT (29.936380000000028 -30.264230000000026)',
          LOCATION_X: 29.93638,
          LOCATION_Y: -30.26423,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOTHITHONG',
          the_geom: 'POINT (23.82805000000002 -27.06500000000003)',
          LOCATION_X: 23.82805,
          LOCATION_Y: -27.065,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOROKWENG',
          the_geom: 'POINT (23.77682000000002 -26.136770000000023)',
          LOCATION_X: 23.77682,
          LOCATION_Y: -26.13677,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TSINENG',
          the_geom: 'POINT (23.076190000000025 -27.085130000000028)',
          LOCATION_X: 23.07619,
          LOCATION_Y: -27.08513,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEBOENG',
          the_geom: 'POINT (30.64776000000003 -24.50900000000002)',
          LOCATION_X: 30.64776,
          LOCATION_Y: -24.509,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALIPSDRIFT',
          the_geom: 'POINT (29.82122000000003 -24.234470000000023)',
          LOCATION_X: 29.82122,
          LOCATION_Y: -24.23447,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ADELAIDE',
          the_geom: 'POINT (26.292550000000023 -32.70725000000004)',
          LOCATION_X: 26.29255,
          LOCATION_Y: -32.70725,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COOKHOUSE',
          the_geom: 'POINT (25.800500000000024 -32.75007000000003)',
          LOCATION_X: 25.8005,
          LOCATION_Y: -32.75007,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOMERSET EAST',
          the_geom: 'POINT (25.591140000000024 -32.71820000000003)',
          LOCATION_X: 25.59114,
          LOCATION_Y: -32.7182,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UITENHAGE',
          the_geom: 'POINT (25.400850000000023 -33.76565000000003)',
          LOCATION_X: 25.40085,
          LOCATION_Y: -33.76565,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BARRYDALE',
          the_geom: 'POINT (20.72117000000002 -33.90276000000003)',
          LOCATION_X: 20.72117,
          LOCATION_Y: -33.90276,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ASHTON',
          the_geom: 'POINT (20.06699000000002 -33.833610000000036)',
          LOCATION_X: 20.06699,
          LOCATION_Y: -33.83361,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRACKENDOWNS',
          the_geom: 'POINT (28.096360000000026 -26.346190000000025)',
          LOCATION_X: 28.09636,
          LOCATION_Y: -26.34619,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEIDELBERG (GP)',
          the_geom: 'POINT (28.354130000000023 -26.496520000000025)',
          LOCATION_X: 28.35413,
          LOCATION_Y: -26.49652,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUDUZA',
          the_geom: 'POINT (28.41770000000003 -26.375400000000027)',
          LOCATION_X: 28.4177,
          LOCATION_Y: -26.3754,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MBONGOLWANE',
          the_geom: 'POINT (31.203160000000025 -28.939370000000032)',
          LOCATION_X: 31.20316,
          LOCATION_Y: -28.93937,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLABISA',
          the_geom: 'POINT (31.85714000000003 -28.140370000000022)',
          LOCATION_X: 31.85714,
          LOCATION_Y: -28.14037,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMBUMBULU',
          the_geom: 'POINT (30.708960000000026 -29.99128000000003)',
          LOCATION_X: 30.70896,
          LOCATION_Y: -29.99128,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEENBERG',
          the_geom: 'POINT (18.476210000000016 -34.06542000000003)',
          LOCATION_X: 18.47621,
          LOCATION_Y: -34.06542,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AMALIA',
          the_geom: 'POINT (25.050680000000025 -27.249960000000023)',
          LOCATION_X: 25.05068,
          LOCATION_Y: -27.24996,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BREYTEN',
          the_geom: 'POINT (29.986640000000023 -26.302260000000025)',
          LOCATION_X: 29.98664,
          LOCATION_Y: -26.30226,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHRISSIESMEER',
          the_geom: 'POINT (30.213570000000026 -26.280520000000024)',
          LOCATION_X: 30.21357,
          LOCATION_Y: -26.28052,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAKAMAS',
          the_geom: 'POINT (20.61854000000002 -28.770740000000025)',
          LOCATION_X: 20.61854,
          LOCATION_Y: -28.77074,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KENHARDT',
          the_geom: 'POINT (21.15192000000002 -29.34660000000003)',
          LOCATION_X: 21.15192,
          LOCATION_Y: -29.3466,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KATHU',
          the_geom: 'POINT (23.04492000000002 -27.698920000000022)',
          LOCATION_X: 23.04492,
          LOCATION_Y: -27.69892,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CRAMOND',
          the_geom: 'POINT (30.42808000000003 -29.414480000000022)',
          LOCATION_X: 30.42808,
          LOCATION_Y: -29.41448,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HILTON-KZN',
          the_geom: 'POINT (30.29617000000003 -29.565310000000025)',
          LOCATION_X: 30.29617,
          LOCATION_Y: -29.56531,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IMPENDLE',
          the_geom: 'POINT (29.865450000000028 -29.600600000000025)',
          LOCATION_X: 29.86545,
          LOCATION_Y: -29.6006,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOUNTAIN RISE',
          the_geom: 'POINT (30.402030000000025 -29.581800000000033)',
          LOCATION_X: 30.40203,
          LOCATION_Y: -29.5818,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PLESSISLAER',
          the_geom: 'POINT (30.33879000000003 -29.645130000000027)',
          LOCATION_X: 30.33879,
          LOCATION_Y: -29.64513,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PADDOCK',
          the_geom: 'POINT (30.24980000000003 -30.75860000000003)',
          LOCATION_X: 30.2498,
          LOCATION_Y: -30.7586,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHILIPPI EAST',
          the_geom: 'POINT (18.606850000000016 -34.01031000000003)',
          LOCATION_X: 18.60685,
          LOCATION_Y: -34.01031,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CARLETONVILLE',
          the_geom: 'POINT (27.398590000000024 -26.358390000000025)',
          LOCATION_X: 27.39859,
          LOCATION_Y: -26.35839,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KHUTSONG',
          the_geom: 'POINT (27.330510000000025 -26.343010000000024)',
          LOCATION_X: 27.33051,
          LOCATION_Y: -26.34301,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KRUGERSDORP',
          the_geom: 'POINT (27.766000000000027 -26.099400000000028)',
          LOCATION_X: 27.766,
          LOCATION_Y: -26.0994,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SANDRINGHAM',
          the_geom: 'POINT (28.118340000000025 -26.136480000000024)',
          LOCATION_X: 28.11834,
          LOCATION_Y: -26.13648,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRETORIA WEST',
          the_geom: 'POINT (28.158000000000026 -25.748080000000023)',
          LOCATION_X: 28.158,
          LOCATION_Y: -25.74808,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MODDER RIVER',
          the_geom: 'POINT (24.629260000000023 -29.031960000000023)',
          LOCATION_X: 24.62926,
          LOCATION_Y: -29.03196,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EVANDER',
          the_geom: 'POINT (29.107590000000023 -26.470650000000024)',
          LOCATION_X: 29.10759,
          LOCATION_Y: -26.47065,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INCHANGA',
          the_geom: 'POINT (30.678730000000026 -29.74268000000003)',
          LOCATION_X: 30.67873,
          LOCATION_Y: -29.74268,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMHLALI',
          the_geom: 'POINT (31.21969000000003 -29.468640000000025)',
          LOCATION_X: 31.21969,
          LOCATION_Y: -29.46864,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FISH HOEK',
          the_geom: 'POINT (18.434920000000016 -34.13289000000003)',
          LOCATION_X: 18.43492,
          LOCATION_Y: -34.13289,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MPUMALANGA KZN',
          the_geom: 'POINT (30.636330000000022 -29.81428000000003)',
          LOCATION_X: 30.63633,
          LOCATION_Y: -29.81428,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZWELITSHA',
          the_geom: 'POINT (27.421210000000023 -32.914250000000024)',
          LOCATION_X: 27.42121,
          LOCATION_Y: -32.91425,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TLHABANE',
          the_geom: 'POINT (27.214330000000025 -25.647370000000024)',
          LOCATION_X: 27.21433,
          LOCATION_Y: -25.64737,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BUTTERWORTH',
          the_geom: 'POINT (28.14217000000003 -32.329200000000036)',
          LOCATION_X: 28.14217,
          LOCATION_Y: -32.3292,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAL',
          the_geom: 'POINT (28.940270000000027 -26.798250000000024)',
          LOCATION_X: 28.94027,
          LOCATION_Y: -26.79825,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UTRECHT',
          the_geom: 'POINT (30.319410000000026 -27.656190000000027)',
          LOCATION_X: 30.31941,
          LOCATION_Y: -27.65619,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAYDON WHARF',
          the_geom: 'POINT (31.00228000000003 -29.878300000000028)',
          LOCATION_X: 31.00228,
          LOCATION_Y: -29.8783,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AMANZIMTOTI',
          the_geom: 'POINT (30.880110000000027 -30.051820000000024)',
          LOCATION_X: 30.88011,
          LOCATION_Y: -30.05182,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CALCUTTA',
          the_geom: 'POINT (31.243850000000027 -24.987050000000025)',
          LOCATION_X: 31.24385,
          LOCATION_Y: -24.98705,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WILLOWVALE',
          the_geom: 'POINT (28.506610000000023 -32.26700000000003)',
          LOCATION_X: 28.50661,
          LOCATION_Y: -32.267,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VREDENDAL',
          the_geom: 'POINT (18.51031000000002 -31.660880000000027)',
          LOCATION_X: 18.51031,
          LOCATION_Y: -31.66088,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELUKWATINI',
          the_geom: 'POINT (30.78716000000003 -26.060880000000022)',
          LOCATION_X: 30.78716,
          LOCATION_Y: -26.06088,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKAPANSTAD',
          the_geom: 'POINT (28.12209000000003 -25.236040000000024)',
          LOCATION_X: 28.12209,
          LOCATION_Y: -25.23604,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KANYAMAZANE',
          the_geom: 'POINT (31.18394000000003 -25.465030000000024)',
          LOCATION_X: 31.18394,
          LOCATION_Y: -25.46503,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VUWANI',
          the_geom: 'POINT (30.42080000000003 -23.12982000000002)',
          LOCATION_X: 30.4208,
          LOCATION_Y: -23.12982,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEYMOUR',
          the_geom: 'POINT (26.767920000000025 -32.55177000000003)',
          LOCATION_X: 26.76792,
          LOCATION_Y: -32.55177,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MDANTSANE',
          the_geom: 'POINT (27.775830000000028 -32.94867000000003)',
          LOCATION_X: 27.77583,
          LOCATION_Y: -32.94867,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEBOKENG',
          the_geom: 'POINT (27.848130000000026 -26.609240000000025)',
          LOCATION_X: 27.84813,
          LOCATION_Y: -26.60924,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TWEEFONTEIN',
          the_geom: 'POINT (28.806380000000022 -25.406260000000024)',
          LOCATION_X: 28.80638,
          LOCATION_Y: -25.40626,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAGGAFONTEIN',
          the_geom: 'POINT (28.947680000000027 -25.309420000000024)',
          LOCATION_X: 28.94768,
          LOCATION_Y: -25.30942,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALGOAPARK',
          the_geom: 'POINT (25.570710000000023 -33.902460000000026)',
          LOCATION_X: 25.57071,
          LOCATION_Y: -33.90246,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DELAREYVILLE',
          the_geom: 'POINT (25.456700000000026 -26.690940000000023)',
          LOCATION_X: 25.4567,
          LOCATION_Y: -26.69094,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NQAMAKWE',
          the_geom: 'POINT (27.942820000000026 -32.20241000000003)',
          LOCATION_X: 27.94282,
          LOCATION_Y: -32.20241,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOUNT FRERE',
          the_geom: 'POINT (28.991250000000026 -30.90680000000003)',
          LOCATION_X: 28.99125,
          LOCATION_Y: -30.9068,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MTONTSASA',
          the_geom: 'POINT (29.70240000000003 -31.207660000000025)',
          LOCATION_X: 29.7024,
          LOCATION_Y: -31.20766,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WELKOM',
          the_geom: 'POINT (26.736910000000027 -27.973650000000028)',
          LOCATION_X: 26.73691,
          LOCATION_Y: -27.97365,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VIRGINIA',
          the_geom: 'POINT (26.872010000000024 -28.103920000000027)',
          LOCATION_X: 26.87201,
          LOCATION_Y: -28.10392,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CARNARVON',
          the_geom: 'POINT (22.125900000000023 -30.969430000000028)',
          LOCATION_X: 22.1259,
          LOCATION_Y: -30.96943,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELSIES RIVER',
          the_geom: 'POINT (18.564430000000016 -33.92441000000004)',
          LOCATION_X: 18.56443,
          LOCATION_Y: -33.92441,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DOBSONVILLE',
          the_geom: 'POINT (27.87040000000003 -26.215500000000027)',
          LOCATION_X: 27.8704,
          LOCATION_Y: -26.2155,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EDENVALE',
          the_geom: 'POINT (28.148850000000028 -26.148290000000024)',
          LOCATION_X: 28.14885,
          LOCATION_Y: -26.14829,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELSBURG',
          the_geom: 'POINT (28.198770000000025 -26.245170000000023)',
          LOCATION_X: 28.19877,
          LOCATION_Y: -26.24517,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TOKOZA',
          the_geom: 'POINT (28.143380000000022 -26.329870000000025)',
          LOCATION_X: 28.14338,
          LOCATION_Y: -26.32987,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EDENPARK',
          the_geom: 'POINT (28.12810000000003 -26.376600000000025)',
          LOCATION_X: 28.1281,
          LOCATION_Y: -26.3766,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LUTZVILLE',
          the_geom: 'POINT (18.345010000000016 -31.559020000000032)',
          LOCATION_X: 18.34501,
          LOCATION_Y: -31.55902,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MIDDELPOS',
          the_geom: 'POINT (20.232000000000017 -31.906320000000026)',
          LOCATION_X: 20.232,
          LOCATION_Y: -31.90632,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SOPHIA TOWN',
          the_geom: 'POINT (27.971730000000022 -26.177330000000023)',
          LOCATION_X: 27.97173,
          LOCATION_Y: -26.17733,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CERES',
          the_geom: 'POINT (19.311590000000017 -33.36941000000003)',
          LOCATION_X: 19.31159,
          LOCATION_Y: -33.36941,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BONNIEVALE',
          the_geom: 'POINT (20.098250000000018 -33.93905000000004)',
          LOCATION_X: 20.09825,
          LOCATION_Y: -33.93905,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIEPKLOOF',
          the_geom: 'POINT (27.941920000000025 -26.23883000000003)',
          LOCATION_X: 27.94192,
          LOCATION_Y: -26.23883,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NALEDI',
          the_geom: 'POINT (27.83210000000003 -26.254500000000025)',
          LOCATION_X: 27.8321,
          LOCATION_Y: -26.2545,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SINOVILLE',
          the_geom: 'POINT (28.226170000000025 -25.676010000000023)',
          LOCATION_X: 28.22617,
          LOCATION_Y: -25.67601,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEKGOSESE',
          the_geom: 'POINT (30.150340000000025 -23.41238000000002)',
          LOCATION_X: 30.15034,
          LOCATION_Y: -23.41238,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAAKE',
          the_geom: 'POINT (30.27092000000003 -23.973100000000024)',
          LOCATION_X: 30.27092,
          LOCATION_Y: -23.9731,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DIENTJIE',
          the_geom: 'POINT (30.804670000000026 -24.613840000000025)',
          LOCATION_X: 30.80467,
          LOCATION_Y: -24.61384,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAMESH',
          the_geom: 'POINT (25.385620000000024 -33.75313000000003)',
          LOCATION_X: 25.38562,
          LOCATION_Y: -33.75313,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THORNHILL',
          the_geom: 'POINT (25.140840000000022 -33.902260000000034)',
          LOCATION_X: 25.14084,
          LOCATION_Y: -33.90226,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEWARK',
          the_geom: 'POINT (31.41250000000003 -29.19994000000003)',
          LOCATION_X: 31.4125,
          LOCATION_Y: -29.19994,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GOODWOOD',
          the_geom: 'POINT (18.561950000000017 -33.908880000000025)',
          LOCATION_X: 18.56195,
          LOCATION_Y: -33.90888,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KRAAIFONTEIN',
          the_geom: 'POINT (18.727300000000017 -33.857000000000035)',
          LOCATION_X: 18.7273,
          LOCATION_Y: -33.857,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DUDUDU',
          the_geom: 'POINT (30.61743000000003 -30.192820000000026)',
          LOCATION_X: 30.61743,
          LOCATION_Y: -30.19282,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NGODWANA',
          the_geom: 'POINT (30.674290000000028 -25.570800000000027)',
          LOCATION_X: 30.67429,
          LOCATION_Y: -25.5708,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DURBAN CENTRAL',
          the_geom: 'POINT (31.027480000000025 -29.842290000000027)',
          LOCATION_X: 31.02748,
          LOCATION_Y: -29.84229,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UGIE',
          the_geom: 'POINT (28.234900000000025 -31.199530000000028)',
          LOCATION_X: 28.2349,
          LOCATION_Y: -31.19953,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BARKLY EAST',
          the_geom: 'POINT (27.597740000000027 -30.969130000000032)',
          LOCATION_X: 27.59774,
          LOCATION_Y: -30.96913,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GUGULETHU',
          the_geom: 'POINT (18.563310000000016 -33.974970000000035)',
          LOCATION_X: 18.56331,
          LOCATION_Y: -33.97497,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MANENBERG',
          the_geom: 'POINT (18.556080000000016 -33.971860000000035)',
          LOCATION_X: 18.55608,
          LOCATION_Y: -33.97186,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MITCHELLS PLAIN',
          the_geom: 'POINT (18.623210000000018 -34.047610000000034)',
          LOCATION_X: 18.62321,
          LOCATION_Y: -34.04761,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PEARSTON',
          the_geom: 'POINT (25.137830000000022 -32.580760000000026)',
          LOCATION_X: 25.13783,
          LOCATION_Y: -32.58076,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIETBRON',
          the_geom: 'POINT (23.152200000000022 -32.901260000000036)',
          LOCATION_X: 23.1522,
          LOCATION_Y: -32.90126,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SCHWEIZER-RENEKE',
          the_geom: 'POINT (25.33134000000002 -27.189430000000026)',
          LOCATION_X: 25.33134,
          LOCATION_Y: -27.18943,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CALITZDORP',
          the_geom: 'POINT (21.68666000000002 -33.533390000000026)',
          LOCATION_X: 21.68666,
          LOCATION_Y: -33.53339,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ATTERIDGEVILLE',
          the_geom: 'POINT (28.071730000000027 -25.774620000000024)',
          LOCATION_X: 28.07173,
          LOCATION_Y: -25.77462,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAUDIUM',
          the_geom: 'POINT (28.097890000000024 -25.785550000000022)',
          LOCATION_X: 28.09789,
          LOCATION_Y: -25.78555,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GARSFONTEIN',
          the_geom: 'POINT (28.289100000000026 -25.788530000000023)',
          LOCATION_X: 28.2891,
          LOCATION_Y: -25.78853,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HERCULES',
          the_geom: 'POINT (28.14880000000003 -25.719140000000024)',
          LOCATION_X: 28.1488,
          LOCATION_Y: -25.71914,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ATHLONE',
          the_geom: 'POINT (18.507240000000017 -33.96157000000004)',
          LOCATION_X: 18.50724,
          LOCATION_Y: -33.96157,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BISHOP LAVIS',
          the_geom: 'POINT (18.57224000000002 -33.946340000000035)',
          LOCATION_X: 18.57224,
          LOCATION_Y: -33.94634,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GLENCOE',
          the_geom: 'POINT (30.154520000000026 -28.179320000000022)',
          LOCATION_X: 30.15452,
          LOCATION_Y: -28.17932,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SASOLBURG',
          the_geom: 'POINT (27.828820000000025 -26.813510000000022)',
          LOCATION_X: 27.82882,
          LOCATION_Y: -26.81351,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEYNSRUS',
          the_geom: 'POINT (27.563810000000025 -27.953460000000028)',
          LOCATION_X: 27.56381,
          LOCATION_Y: -27.95346,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DENEYSVILLE',
          the_geom: 'POINT (28.094930000000026 -26.887160000000026)',
          LOCATION_X: 28.09493,
          LOCATION_Y: -26.88716,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILJOENSDRIF',
          the_geom: 'POINT (27.920260000000024 -26.726980000000022)',
          LOCATION_X: 27.92026,
          LOCATION_Y: -26.72698,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VREDEFORT',
          the_geom: 'POINT (27.367530000000023 -27.00656000000003)',
          LOCATION_X: 27.36753,
          LOCATION_Y: -27.00656,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OLIFANTSFONTEIN',
          the_geom: 'POINT (28.232110000000024 -25.951350000000023)',
          LOCATION_X: 28.23211,
          LOCATION_Y: -25.95135,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TEMBISA',
          the_geom: 'POINT (28.220140000000026 -26.007490000000022)',
          LOCATION_X: 28.22014,
          LOCATION_Y: -26.00749,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VOSLOORUS',
          the_geom: 'POINT (28.21100000000003 -26.342300000000026)',
          LOCATION_X: 28.211,
          LOCATION_Y: -26.3423,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PARK ROAD',
          the_geom: 'POINT (26.211590000000022 -29.119940000000028)',
          LOCATION_X: 26.21159,
          LOCATION_Y: -29.11994,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EDENBURG',
          the_geom: 'POINT (25.934620000000024 -29.735670000000027)',
          LOCATION_X: 25.93462,
          LOCATION_Y: -29.73567,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GREYTOWN',
          the_geom: 'POINT (30.594290000000026 -29.059130000000028)',
          LOCATION_X: 30.59429,
          LOCATION_Y: -29.05913,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ODENDAALSRUS',
          the_geom: 'POINT (26.687510000000024 -27.872260000000022)',
          LOCATION_X: 26.68751,
          LOCATION_Y: -27.87226,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HERTZOGVILLE',
          the_geom: 'POINT (25.506160000000023 -28.13091000000003)',
          LOCATION_X: 25.50616,
          LOCATION_Y: -28.13091,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'REDDERSBURG',
          the_geom: 'POINT (26.167370000000023 -29.653030000000026)',
          LOCATION_X: 26.16737,
          LOCATION_Y: -29.65303,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SUTHERLAND',
          the_geom: 'POINT (20.66037000000002 -32.395830000000025)',
          LOCATION_X: 20.66037,
          LOCATION_Y: -32.39583,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CALA',
          the_geom: 'POINT (27.696440000000024 -31.524160000000027)',
          LOCATION_X: 27.69644,
          LOCATION_Y: -31.52416,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ENGCOBO',
          the_geom: 'POINT (27.999610000000022 -31.67635000000003)',
          LOCATION_X: 27.99961,
          LOCATION_Y: -31.67635,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DALASILE',
          the_geom: 'POINT (28.193330000000024 -31.62187000000003)',
          LOCATION_X: 28.19333,
          LOCATION_Y: -31.62187,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOUNT FLETCHER',
          the_geom: 'POINT (28.509880000000024 -30.690570000000026)',
          LOCATION_X: 28.50988,
          LOCATION_Y: -30.69057,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DE RUST',
          the_geom: 'POINT (22.53451000000002 -33.488740000000035)',
          LOCATION_X: 22.53451,
          LOCATION_Y: -33.48874,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GEORGE',
          the_geom: 'POINT (22.46031000000002 -33.956580000000024)',
          LOCATION_X: 22.46031,
          LOCATION_Y: -33.95658,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KNYSNA',
          the_geom: 'POINT (23.05145000000002 -34.03629000000003)',
          LOCATION_X: 23.05145,
          LOCATION_Y: -34.03629,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOSSEL BAY',
          the_geom: 'POINT (22.14066000000002 -34.181450000000034)',
          LOCATION_X: 22.14066,
          LOCATION_Y: -34.18145,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALBERTINIA',
          the_geom: 'POINT (21.58325000000002 -34.20860000000004)',
          LOCATION_X: 21.58325,
          LOCATION_Y: -34.2086,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROOT BRAKRIVIER',
          the_geom: 'POINT (22.21906000000002 -34.054690000000036)',
          LOCATION_X: 22.21906,
          LOCATION_Y: -34.05469,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RIVERSDALE',
          the_geom: 'POINT (21.261230000000015 -34.09338000000003)',
          LOCATION_X: 21.26123,
          LOCATION_Y: -34.09338,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEAUFORT WEST',
          the_geom: 'POINT (22.58486000000002 -32.34946000000003)',
          LOCATION_X: 22.58486,
          LOCATION_Y: -32.34946,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LAAIPLEK',
          the_geom: 'POINT (18.156460000000017 -32.771150000000034)',
          LOCATION_X: 18.15646,
          LOCATION_Y: -32.77115,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOTHASIG',
          the_geom: 'POINT (18.543460000000017 -33.85506000000003)',
          LOCATION_X: 18.54346,
          LOCATION_Y: -33.85506,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MPOPHOMENI',
          the_geom: 'POINT (30.18046000000003 -29.562640000000027)',
          LOCATION_X: 30.18046,
          LOCATION_Y: -29.56264,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMSUNDUZI',
          the_geom: 'POINT (30.638480000000026 -29.66440000000003)',
          LOCATION_X: 30.63848,
          LOCATION_Y: -29.6644,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRONVILLE',
          the_geom: 'POINT (26.817620000000023 -27.996830000000024)',
          LOCATION_X: 26.81762,
          LOCATION_Y: -27.99683,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOKOPANE',
          the_geom: 'POINT (29.015830000000022 -24.18398000000002)',
          LOCATION_X: 29.01583,
          LOCATION_Y: -24.18398,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NORVALSPONT',
          the_geom: 'POINT (25.451040000000024 -30.632280000000026)',
          LOCATION_X: 25.45104,
          LOCATION_Y: -30.63228,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LENASIA',
          the_geom: 'POINT (27.824960000000026 -26.322280000000024)',
          LOCATION_X: 27.82496,
          LOCATION_Y: -26.32228,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IVORY PARK',
          the_geom: 'POINT (28.201620000000027 -25.990010000000023)',
          LOCATION_X: 28.20162,
          LOCATION_Y: -25.99001,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DOUGLASDALE',
          the_geom: 'POINT (27.990700000000025 -26.026300000000028)',
          LOCATION_X: 27.9907,
          LOCATION_Y: -26.0263,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOKSBURG NORTH',
          the_geom: 'POINT (28.253020000000028 -26.206000000000024)',
          LOCATION_X: 28.25302,
          LOCATION_Y: -26.206,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'IPELEGENG',
          the_geom: 'POINT (25.305790000000023 -27.196380000000023)',
          LOCATION_X: 25.30579,
          LOCATION_Y: -27.19638,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RUSTENBURG',
          the_geom: 'POINT (27.248450000000023 -25.668210000000023)',
          LOCATION_X: 27.24845,
          LOCATION_Y: -25.66821,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOOPDAL',
          the_geom: 'POINT (27.492320000000024 -24.27923000000002)',
          LOCATION_X: 27.49232,
          LOCATION_Y: -24.27923,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CUMBERLAND',
          the_geom: 'POINT (26.919680000000024 -23.976000000000024)',
          LOCATION_X: 26.91968,
          LOCATION_Y: -23.976,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEPHALALE',
          the_geom: 'POINT (27.734790000000025 -23.67856000000002)',
          LOCATION_X: 27.73479,
          LOCATION_Y: -23.67856,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BULGERIVIER',
          the_geom: 'POINT (27.693890000000025 -24.12651000000002)',
          LOCATION_X: 27.69389,
          LOCATION_Y: -24.12651,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TOM BURKE',
          the_geom: 'POINT (27.999360000000028 -23.06880000000002)',
          LOCATION_X: 27.99936,
          LOCATION_Y: -23.0688,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GIYANI',
          the_geom: 'POINT (30.715730000000026 -23.31353000000002)',
          LOCATION_X: 30.71573,
          LOCATION_Y: -23.31353,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WATERVAL',
          the_geom: 'POINT (30.070760000000032 -23.16397000000002)',
          LOCATION_X: 30.07076,
          LOCATION_Y: -23.16397,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RITAVI',
          the_geom: 'POINT (30.283610000000028 -23.888110000000022)',
          LOCATION_X: 30.28361,
          LOCATION_Y: -23.88811,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SASELAMANI',
          the_geom: 'POINT (30.857670000000027 -22.83111000000002)',
          LOCATION_X: 30.85767,
          LOCATION_Y: -22.83111,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MHALA',
          the_geom: 'POINT (31.204160000000027 -24.725740000000023)',
          LOCATION_X: 31.20416,
          LOCATION_Y: -24.72574,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CLEVELAND',
          the_geom: 'POINT (28.115560000000023 -26.203980000000023)',
          LOCATION_X: 28.11556,
          LOCATION_Y: -26.20398,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NAVALSIG',
          the_geom: 'POINT (26.237650000000023 -29.105680000000028)',
          LOCATION_X: 26.23765,
          LOCATION_Y: -29.10568,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TIERPOORT',
          the_geom: 'POINT (26.090080000000025 -29.443940000000023)',
          LOCATION_X: 26.09008,
          LOCATION_Y: -29.44394,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BLOEMSPRUIT',
          the_geom: 'POINT (26.278520000000025 -29.13950000000003)',
          LOCATION_X: 26.27852,
          LOCATION_Y: -29.1395,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DORDRECHT',
          the_geom: 'POINT (27.047190000000025 -31.379400000000032)',
          LOCATION_X: 27.04719,
          LOCATION_Y: -31.3794,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOTHAVILLE',
          the_geom: 'POINT (26.614230000000024 -27.388910000000024)',
          LOCATION_X: 26.61423,
          LOCATION_Y: -27.38891,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BULTFONTEIN',
          the_geom: 'POINT (26.152860000000025 -28.293460000000028)',
          LOCATION_X: 26.15286,
          LOCATION_Y: -28.29346,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOOPSTAD',
          the_geom: 'POINT (25.905460000000023 -27.836690000000022)',
          LOCATION_X: 25.90546,
          LOCATION_Y: -27.83669,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOXTON',
          the_geom: 'POINT (22.34998000000002 -31.47720000000003)',
          LOCATION_X: 22.34998,
          LOCATION_Y: -31.4772,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRINCE ALBERT',
          the_geom: 'POINT (22.02828000000002 -33.219440000000034)',
          LOCATION_X: 22.02828,
          LOCATION_Y: -33.21944,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZAMDELA',
          the_geom: 'POINT (27.856710000000028 -26.844160000000027)',
          LOCATION_X: 27.85671,
          LOCATION_Y: -26.84416,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NOUPOORT',
          the_geom: 'POINT (24.951160000000023 -31.17601000000003)',
          LOCATION_X: 24.95116,
          LOCATION_Y: -31.17601,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RICHMOND(C)',
          the_geom: 'POINT (23.94401000000002 -31.415080000000028)',
          LOCATION_X: 23.94401,
          LOCATION_Y: -31.41508,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'POLOKWANE',
          the_geom: 'POINT (29.454810000000027 -23.91312000000002)',
          LOCATION_X: 29.45481,
          LOCATION_Y: -23.91312,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOROKA',
          the_geom: 'POINT (27.875500000000027 -26.268100000000025)',
          LOCATION_X: 27.8755,
          LOCATION_Y: -26.2681,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LIME ACRES',
          the_geom: 'POINT (23.52467000000002 -28.358920000000023)',
          LOCATION_X: 23.52467,
          LOCATION_Y: -28.35892,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OLIFANTSHOEK',
          the_geom: 'POINT (22.73744000000002 -27.947530000000025)',
          LOCATION_X: 22.73744,
          LOCATION_Y: -27.94753,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEVERN',
          the_geom: 'POINT (22.859030000000022 -26.58681000000003)',
          LOCATION_X: 22.85903,
          LOCATION_Y: -26.58681,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAN ZYLSRUS',
          the_geom: 'POINT (22.05007000000002 -26.876790000000025)',
          LOCATION_X: 22.05007,
          LOCATION_Y: -26.87679,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TINMYNE',
          the_geom: 'POINT (28.77543000000003 -24.03597000000002)',
          LOCATION_X: 28.77543,
          LOCATION_Y: -24.03597,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TOLWE',
          the_geom: 'POINT (28.575130000000026 -22.98531000000002)',
          LOCATION_X: 28.57513,
          LOCATION_Y: -22.98531,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WOLSELEY',
          the_geom: 'POINT (19.20104000000002 -33.414400000000036)',
          LOCATION_X: 19.20104,
          LOCATION_Y: -33.4144,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORT ALFRED',
          the_geom: 'POINT (26.889040000000023 -33.59043000000003)',
          LOCATION_X: 26.88904,
          LOCATION_Y: -33.59043,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SKUKUZA',
          the_geom: 'POINT (31.59017000000003 -24.99523000000002)',
          LOCATION_X: 31.59017,
          LOCATION_Y: -24.99523,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOWS CREEK',
          the_geom: 'POINT (31.293370000000028 -25.644530000000024)',
          LOCATION_X: 31.29337,
          LOCATION_Y: -25.64453,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WITRIVIER',
          the_geom: 'POINT (31.017900000000033 -25.328300000000027)',
          LOCATION_X: 31.0179,
          LOCATION_Y: -25.3283,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAAPMUIDEN',
          the_geom: 'POINT (31.34071000000003 -25.536140000000024)',
          LOCATION_X: 31.34071,
          LOCATION_Y: -25.53614,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROOT MARICO',
          the_geom: 'POINT (26.418680000000023 -25.599680000000024)',
          LOCATION_X: 26.41868,
          LOCATION_Y: -25.59968,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NIETVERDIEND',
          the_geom: 'POINT (26.158790000000025 -25.023250000000022)',
          LOCATION_X: 26.15879,
          LOCATION_Y: -25.02325,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOLOBEDU',
          the_geom: 'POINT (30.222740000000027 -23.64412000000002)',
          LOCATION_X: 30.22274,
          LOCATION_Y: -23.64412,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILLIERS',
          the_geom: 'POINT (28.599530000000026 -27.026110000000024)',
          LOCATION_X: 28.59953,
          LOCATION_Y: -27.02611,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RHODES',
          the_geom: 'POINT (27.966740000000026 -30.793790000000026)',
          LOCATION_X: 27.96674,
          LOCATION_Y: -30.79379,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CAMBRIDGE',
          the_geom: 'POINT (27.898120000000024 -32.97932000000004)',
          LOCATION_X: 27.89812,
          LOCATION_Y: -32.97932,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BERGVILLE',
          the_geom: 'POINT (29.355230000000027 -28.731440000000028)',
          LOCATION_X: 29.35523,
          LOCATION_Y: -28.73144,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COLENSO',
          the_geom: 'POINT (29.822050000000026 -28.73492000000003)',
          LOCATION_X: 29.82205,
          LOCATION_Y: -28.73492,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOKSTAD',
          the_geom: 'POINT (29.42536000000003 -30.550930000000026)',
          LOCATION_X: 29.42536,
          LOCATION_Y: -30.55093,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MATATIELE',
          the_geom: 'POINT (28.80508000000003 -30.343620000000026)',
          LOCATION_X: 28.80508,
          LOCATION_Y: -30.34362,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FRANKLIN',
          the_geom: 'POINT (29.45103000000003 -30.317600000000034)',
          LOCATION_X: 29.45103,
          LOCATION_Y: -30.3176,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FOLWENI',
          the_geom: 'POINT (30.811850000000028 -29.990680000000026)',
          LOCATION_X: 30.81185,
          LOCATION_Y: -29.99068,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RAVENSMEAD',
          the_geom: 'POINT (18.59730000000002 -33.92226000000003)',
          LOCATION_X: 18.5973,
          LOCATION_Y: -33.92226,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOPPIES',
          the_geom: 'POINT (27.575330000000022 -27.242650000000022)',
          LOCATION_X: 27.57533,
          LOCATION_Y: -27.24265,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LINDLEY',
          the_geom: 'POINT (27.920710000000025 -27.883430000000022)',
          LOCATION_X: 27.92071,
          LOCATION_Y: -27.88343,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PARYS',
          the_geom: 'POINT (27.45670000000003 -26.898370000000025)',
          LOCATION_X: 27.4567,
          LOCATION_Y: -26.89837,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAYVILLE-KZN',
          the_geom: 'POINT (30.984060000000028 -29.852070000000026)',
          LOCATION_X: 30.98406,
          LOCATION_Y: -29.85207,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PINETOWN',
          the_geom: 'POINT (30.872010000000028 -29.817970000000027)',
          LOCATION_X: 30.87201,
          LOCATION_Y: -29.81797,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWADABEKA',
          the_geom: 'POINT (30.892950000000027 -29.776190000000025)',
          LOCATION_X: 30.89295,
          LOCATION_Y: -29.77619,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARIANNHILL',
          the_geom: 'POINT (30.83530000000003 -29.862860000000026)',
          LOCATION_X: 30.8353,
          LOCATION_Y: -29.86286,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORT SHEPSTONE',
          the_geom: 'POINT (30.448900000000034 -30.733680000000028)',
          LOCATION_X: 30.4489,
          LOCATION_Y: -30.73368,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EZINQOLENI',
          the_geom: 'POINT (30.12799000000003 -30.784760000000027)',
          LOCATION_X: 30.12799,
          LOCATION_Y: -30.78476,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MEHLOMNYAMA',
          the_geom: 'POINT (30.322730000000032 -30.58681000000003)',
          LOCATION_X: 30.32273,
          LOCATION_Y: -30.58681,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORT EDWARD',
          the_geom: 'POINT (30.217230000000026 -31.05239000000003)',
          LOCATION_X: 30.21723,
          LOCATION_Y: -31.05239,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VANWYKSVLEI',
          the_geom: 'POINT (21.82435000000002 -30.350670000000026)',
          LOCATION_X: 21.82435,
          LOCATION_Y: -30.35067,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MASHASHANE',
          the_geom: 'POINT (29.13431800000003 -23.896389000000024)',
          LOCATION_X: 29.134318,
          LOCATION_Y: -23.896389,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LENTEGEUR',
          the_geom: 'POINT (18.61070000000002 -34.036130000000036)',
          LOCATION_X: 18.6107,
          LOCATION_Y: -34.03613,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WELBEKEND',
          the_geom: 'POINT (28.469940000000026 -25.964760000000023)',
          LOCATION_X: 28.46994,
          LOCATION_Y: -25.96476,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAMELODI',
          the_geom: 'POINT (28.348260000000025 -25.714220000000022)',
          LOCATION_X: 28.34826,
          LOCATION_Y: -25.71422,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LENASIA SOUTH',
          the_geom: 'POINT (27.858910000000023 -26.394410000000025)',
          LOCATION_X: 27.85891,
          LOCATION_Y: -26.39441,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROODEPOORT',
          the_geom: 'POINT (27.87350000000003 -26.155010000000022)',
          LOCATION_X: 27.8735,
          LOCATION_Y: -26.15501,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HONEYDEW',
          the_geom: 'POINT (27.920100000000026 -26.073200000000025)',
          LOCATION_X: 27.9201,
          LOCATION_Y: -26.0732,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FLORIDA',
          the_geom: 'POINT (27.90510000000003 -26.169300000000025)',
          LOCATION_X: 27.9051,
          LOCATION_Y: -26.1693,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JHB CENTRAL',
          the_geom: 'POINT (28.031100000000027 -26.206760000000024)',
          LOCATION_X: 28.0311,
          LOCATION_Y: -26.20676,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FAIRLAND',
          the_geom: 'POINT (27.937500000000025 -26.144230000000025)',
          LOCATION_X: 27.9375,
          LOCATION_Y: -26.14423,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOREBENG',
          the_geom: 'POINT (29.927970000000027 -23.49402000000002)',
          LOCATION_X: 29.92797,
          LOCATION_Y: -23.49402,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOFFIEFONTEIN',
          the_geom: 'POINT (25.003080000000026 -29.40948000000003)',
          LOCATION_X: 25.00308,
          LOCATION_Y: -29.40948,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PETRUSBURG',
          the_geom: 'POINT (25.413660000000025 -29.112930000000027)',
          LOCATION_X: 25.41366,
          LOCATION_Y: -29.11293,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHILIPPOLIS',
          the_geom: 'POINT (25.273140000000023 -30.267390000000027)',
          LOCATION_X: 25.27314,
          LOCATION_Y: -30.26739,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEUNMEKAAR',
          the_geom: 'POINT (25.526280000000025 -29.499440000000032)',
          LOCATION_X: 25.52628,
          LOCATION_Y: -29.49944,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLIPPLAAT',
          the_geom: 'POINT (24.332840000000022 -33.02179000000003)',
          LOCATION_X: 24.33284,
          LOCATION_Y: -33.02179,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BHISHO',
          the_geom: 'POINT (27.440850000000022 -32.85029000000003)',
          LOCATION_X: 27.44085,
          LOCATION_Y: -32.85029,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NDEVANA',
          the_geom: 'POINT (27.489990000000027 -32.91955000000004)',
          LOCATION_X: 27.48999,
          LOCATION_Y: -32.91955,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FRANSCHHOEK',
          the_geom: 'POINT (19.12143000000002 -33.912200000000034)',
          LOCATION_X: 19.12143,
          LOCATION_Y: -33.9122,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOPEFIELD',
          the_geom: 'POINT (18.349980000000016 -33.065250000000034)',
          LOCATION_X: 18.34998,
          LOCATION_Y: -33.06525,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOMAGGAS',
          the_geom: 'POINT (17.487490000000015 -29.794860000000025)',
          LOCATION_X: 17.48749,
          LOCATION_Y: -29.79486,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NEW BRIGHTON',
          the_geom: 'POINT (25.584500000000027 -33.907520000000034)',
          LOCATION_X: 25.5845,
          LOCATION_Y: -33.90752,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOGWASE',
          the_geom: 'POINT (27.236730000000023 -25.271020000000025)',
          LOCATION_X: 27.23673,
          LOCATION_Y: -25.27102,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PUDIMOE',
          the_geom: 'POINT (24.719410000000025 -27.410800000000027)',
          LOCATION_X: 24.71941,
          LOCATION_Y: -27.4108,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GANYESA',
          the_geom: 'POINT (24.18723000000002 -26.59970000000003)',
          LOCATION_X: 24.18723,
          LOCATION_Y: -26.5997,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRACKENFELL',
          the_geom: 'POINT (18.681640000000016 -33.87196000000003)',
          LOCATION_X: 18.68164,
          LOCATION_Y: -33.87196,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALEXANDRIA',
          the_geom: 'POINT (26.412000000000027 -33.65057000000003)',
          LOCATION_X: 26.412,
          LOCATION_Y: -33.65057,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELLIOT',
          the_geom: 'POINT (27.849980000000027 -31.330220000000025)',
          LOCATION_X: 27.84998,
          LOCATION_Y: -31.33022,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STELLENBOSCH',
          the_geom: 'POINT (18.85592000000002 -33.935750000000034)',
          LOCATION_X: 18.85592,
          LOCATION_Y: -33.93575,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THORNVILLE',
          the_geom: 'POINT (30.38723000000003 -29.736210000000032)',
          LOCATION_X: 30.38723,
          LOCATION_Y: -29.73621,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOATE',
          the_geom: 'POINT (28.073680000000028 -25.495100000000026)',
          LOCATION_X: 28.07368,
          LOCATION_Y: -25.4951,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKGOBISTAD',
          the_geom: 'POINT (25.10729000000002 -25.750240000000023)',
          LOCATION_X: 25.10729,
          LOCATION_Y: -25.75024,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WONDERBOOMPOORT',
          the_geom: 'POINT (28.185870000000026 -25.704280000000022)',
          LOCATION_X: 28.18587,
          LOCATION_Y: -25.70428,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SPRINGFONTEIN',
          the_geom: 'POINT (25.705020000000022 -30.266250000000028)',
          LOCATION_X: 25.70502,
          LOCATION_Y: -30.26625,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEAFIELD',
          the_geom: 'POINT (27.047220000000028 -33.530640000000034)',
          LOCATION_X: 27.04722,
          LOCATION_Y: -33.53064,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAALBANK',
          the_geom: 'POINT (28.857090000000028 -25.15941000000002)',
          LOCATION_X: 28.85709,
          LOCATION_Y: -25.15941,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOTHIBISTAD',
          the_geom: 'POINT (23.49068000000002 -27.397760000000027)',
          LOCATION_X: 23.49068,
          LOCATION_Y: -27.39776,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BATLHAROS',
          the_geom: 'POINT (23.341640000000023 -27.305440000000022)',
          LOCATION_X: 23.34164,
          LOCATION_Y: -27.30544,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEUNINGVLEI',
          the_geom: 'POINT (23.17961000000002 -26.29370000000003)',
          LOCATION_X: 23.17961,
          LOCATION_Y: -26.2937,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEYTLERVILLE',
          the_geom: 'POINT (24.341850000000022 -33.327520000000035)',
          LOCATION_X: 24.34185,
          LOCATION_Y: -33.32752,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GLEN GREY',
          the_geom: 'POINT (27.02120000000003 -31.75751000000003)',
          LOCATION_X: 27.0212,
          LOCATION_Y: -31.75751,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MORGENZON TRANSVAAL',
          the_geom: 'POINT (29.612970000000026 -26.733690000000024)',
          LOCATION_X: 29.61297,
          LOCATION_Y: -26.73369,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PIET RETIEF',
          the_geom: 'POINT (30.80584000000003 -27.006370000000025)',
          LOCATION_X: 30.80584,
          LOCATION_Y: -27.00637,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PONGOLA',
          the_geom: 'POINT (31.616230000000026 -27.376260000000023)',
          LOCATION_X: 31.61623,
          LOCATION_Y: -27.37626,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SHEEPMOOR',
          the_geom: 'POINT (30.29458000000003 -26.715030000000027)',
          LOCATION_X: 30.29458,
          LOCATION_Y: -26.71503,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VOLKSRUST',
          the_geom: 'POINT (29.886840000000024 -27.374000000000027)',
          LOCATION_X: 29.88684,
          LOCATION_Y: -27.374,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SAKHILE',
          the_geom: 'POINT (29.221010000000028 -26.963050000000024)',
          LOCATION_X: 29.22101,
          LOCATION_Y: -26.96305,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CATHCART',
          the_geom: 'POINT (27.14110000000003 -32.295790000000025)',
          LOCATION_X: 27.1411,
          LOCATION_Y: -32.29579,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TARKASTAD',
          the_geom: 'POINT (26.257550000000023 -32.007050000000035)',
          LOCATION_X: 26.25755,
          LOCATION_Y: -32.00705,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MCGREGOR',
          the_geom: 'POINT (19.829490000000018 -33.94630000000003)',
          LOCATION_X: 19.82949,
          LOCATION_Y: -33.9463,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAPHUMULO',
          the_geom: 'POINT (31.06624000000003 -29.159890000000026)',
          LOCATION_X: 31.06624,
          LOCATION_Y: -29.15989,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NSUZE',
          the_geom: 'POINT (30.94349000000003 -29.37678000000003)',
          LOCATION_X: 30.94349,
          LOCATION_Y: -29.37678,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NHLANHLENI',
          the_geom: 'POINT (30.422240000000027 -28.551470000000023)',
          LOCATION_X: 30.42224,
          LOCATION_Y: -28.55147,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWAMSANE',
          the_geom: 'POINT (32.147900000000035 -28.428570000000025)',
          LOCATION_X: 32.1479,
          LOCATION_Y: -28.42857,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EKOMBE',
          the_geom: 'POINT (30.897300000000033 -28.64461000000003)',
          LOCATION_X: 30.8973,
          LOCATION_Y: -28.64461,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MADADENI',
          the_geom: 'POINT (30.02664000000003 -27.76200000000003)',
          LOCATION_X: 30.02664,
          LOCATION_Y: -27.762,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MONDLO',
          the_geom: 'POINT (30.695690000000027 -27.973840000000028)',
          LOCATION_X: 30.69569,
          LOCATION_Y: -27.97384,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STEVE VUKILE TSHWETE',
          the_geom: 'POINT (27.465670000000028 -32.72903000000003)',
          LOCATION_X: 27.46567,
          LOCATION_Y: -32.72903,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KHUMA',
          the_geom: 'POINT (26.846860000000024 -26.851470000000024)',
          LOCATION_X: 26.84686,
          LOCATION_Y: -26.85147,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOUNT AYLIFF',
          the_geom: 'POINT (29.369620000000026 -30.810690000000026)',
          LOCATION_X: 29.36962,
          LOCATION_Y: -30.81069,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLABABOMVU',
          the_geom: 'POINT (29.36261000000003 -31.266540000000028)',
          LOCATION_X: 29.36261,
          LOCATION_Y: -31.26654,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRITS',
          the_geom: 'POINT (27.77918000000003 -25.635150000000024)',
          LOCATION_X: 27.77918,
          LOCATION_Y: -25.63515,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GROOTVLEI',
          the_geom: 'POINT (28.509550000000026 -26.798780000000022)',
          LOCATION_X: 28.50955,
          LOCATION_Y: -26.79878,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WESTENBURG',
          the_geom: 'POINT (29.430122220000026 -23.90444444000002)',
          LOCATION_X: 29.4301222,
          LOCATION_Y: -23.904444,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAAL MARINA',
          the_geom: 'POINT (28.23123996000003 -26.873080020000028)',
          LOCATION_X: 28.2312399,
          LOCATION_Y: -26.87308,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MASEMOLA',
          the_geom: 'POINT (29.666730000000022 -24.56753000000002)',
          LOCATION_X: 29.66673,
          LOCATION_Y: -24.56753,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BEKKERSDAL',
          the_geom: 'POINT (27.698730560000026 -26.287108330000024)',
          LOCATION_X: 27.6987305,
          LOCATION_Y: -26.287108,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NONGOMA',
          the_geom: 'POINT (31.64726000000003 -27.899040000000028)',
          LOCATION_X: 31.64726,
          LOCATION_Y: -27.89904,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAHLABATHINI',
          the_geom: 'POINT (31.469080000000027 -28.233900000000027)',
          LOCATION_X: 31.46908,
          LOCATION_Y: -28.2339,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EZIBAYENI',
          the_geom: 'POINT (32.067480000000025 -27.998950000000026)',
          LOCATION_X: 32.06748,
          LOCATION_Y: -27.99895,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NTUZUMA',
          the_geom: 'POINT (30.950970000000027 -29.73440000000003)',
          LOCATION_X: 30.95097,
          LOCATION_Y: -29.7344,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TONGA',
          the_geom: 'POINT (31.784740000000028 -25.688300000000027)',
          LOCATION_X: 31.78474,
          LOCATION_Y: -25.6883,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EKULINDENI',
          the_geom: 'POINT (31.01682000000003 -26.049600000000027)',
          LOCATION_X: 31.01682,
          LOCATION_Y: -26.0496,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JEPPE',
          the_geom: 'POINT (28.060460000000027 -26.202250000000024)',
          LOCATION_X: 28.06046,
          LOCATION_Y: -26.20225,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOOYSENS',
          the_geom: 'POINT (28.022020000000026 -26.233610000000024)',
          LOCATION_X: 28.02202,
          LOCATION_Y: -26.23361,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VOSMAN',
          the_geom: 'POINT (29.127430000000025 -25.867070000000023)',
          LOCATION_X: 29.12743,
          LOCATION_Y: -25.86707,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NELSPRUIT',
          the_geom: 'POINT (30.979200000000034 -25.469280000000023)',
          LOCATION_X: 30.9792,
          LOCATION_Y: -25.46928,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MADEIRA',
          the_geom: 'POINT (28.789710000000028 -31.58703000000003)',
          LOCATION_X: 28.78971,
          LOCATION_Y: -31.58703,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MLUNGISI',
          the_geom: 'POINT (26.865255560000026 -31.910980560000027)',
          LOCATION_X: 26.8652555,
          LOCATION_Y: -31.91098,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STANFORD',
          the_geom: 'POINT (19.45789000000002 -34.43881000000003)',
          LOCATION_X: 19.45789,
          LOCATION_Y: -34.43881,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TABLE VIEW',
          the_geom: 'POINT (18.489300000000018 -33.826350000000026)',
          LOCATION_X: 18.4893,
          LOCATION_Y: -33.82635,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAHIKENG',
          the_geom: 'POINT (25.640550000000022 -25.863140000000023)',
          LOCATION_X: 25.64055,
          LOCATION_Y: -25.86314,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MBEKWENI',
          the_geom: 'POINT (18.997890000000016 -33.67287000000003)',
          LOCATION_X: 18.99789,
          LOCATION_Y: -33.67287,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEIDELBERG(C)',
          the_geom: 'POINT (20.95543000000002 -34.08899000000003)',
          LOCATION_X: 20.95543,
          LOCATION_Y: -34.08899,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PLETTENBERG BAY',
          the_geom: 'POINT (23.37196000000002 -34.057830000000024)',
          LOCATION_X: 23.37196,
          LOCATION_Y: -34.05783,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PACALTSDORP',
          the_geom: 'POINT (22.45031000000002 -34.021960000000036)',
          LOCATION_X: 22.45031,
          LOCATION_Y: -34.02196,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLEINSEE',
          the_geom: 'POINT (17.079840000000015 -29.661930000000027)',
          LOCATION_X: 17.07984,
          LOCATION_Y: -29.66193,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PORT NOLLOTH',
          the_geom: 'POINT (16.869320000000016 -29.254630000000027)',
          LOCATION_X: 16.86932,
          LOCATION_Y: -29.25463,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROODEPAN',
          the_geom: 'POINT (24.730120000000024 -28.672370000000026)',
          LOCATION_X: 24.73012,
          LOCATION_Y: -28.67237,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BRITSTOWN',
          the_geom: 'POINT (23.499600000000026 -30.592180000000027)',
          LOCATION_X: 23.4996,
          LOCATION_Y: -30.59218,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VENTERSTAD',
          the_geom: 'POINT (25.801170000000024 -30.773780000000027)',
          LOCATION_X: 25.80117,
          LOCATION_Y: -30.77378,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ABERDEEN',
          the_geom: 'POINT (24.060980000000022 -32.476340000000036)',
          LOCATION_X: 24.06098,
          LOCATION_Y: -32.47634,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'COMMITTEES',
          the_geom: 'POINT (26.836540000000024 -33.16014000000003)',
          LOCATION_X: 26.83654,
          LOCATION_Y: -33.16014,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LANGA',
          the_geom: 'POINT (18.526470000000018 -33.94453000000003)',
          LOCATION_X: 18.52647,
          LOCATION_Y: -33.94453,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LANSDOWNE',
          the_geom: 'POINT (18.505230000000015 -33.990540000000024)',
          LOCATION_X: 18.50523,
          LOCATION_Y: -33.99054,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRIEKWASTAD',
          the_geom: 'POINT (23.25104000000002 -28.847590000000025)',
          LOCATION_X: 23.25104,
          LOCATION_Y: -28.84759,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LADY FRERE',
          the_geom: 'POINT (27.236490000000025 -31.70148000000003)',
          LOCATION_X: 27.23649,
          LOCATION_Y: -31.70148,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOLOTWA',
          the_geom: 'POINT (27.19920000000003 -31.986200000000032)',
          LOCATION_X: 27.1992,
          LOCATION_Y: -31.9862,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'POSTMASBURG',
          the_geom: 'POINT (23.066800000000022 -28.331240000000026)',
          LOCATION_X: 23.0668,
          LOCATION_Y: -28.33124,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ERMELO',
          the_geom: 'POINT (29.984540000000028 -26.522670000000026)',
          LOCATION_X: 29.98454,
          LOCATION_Y: -26.52267,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'AMSTERDAM',
          the_geom: 'POINT (30.66041000000003 -26.623060000000024)',
          LOCATION_X: 30.66041,
          LOCATION_Y: -26.62306,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BADPLAAS',
          the_geom: 'POINT (30.568570000000022 -25.958360000000024)',
          LOCATION_X: 30.56857,
          LOCATION_Y: -25.95836,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'FERNIE',
          the_geom: 'POINT (30.77370000000003 -26.417590000000025)',
          LOCATION_X: 30.7737,
          LOCATION_Y: -26.41759,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHILADELPHIA',
          the_geom: 'POINT (18.582390000000018 -33.66565000000003)',
          LOCATION_X: 18.58239,
          LOCATION_Y: -33.66565,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELANDS BAY',
          the_geom: 'POINT (18.340690000000016 -32.31333000000003)',
          LOCATION_X: 18.34069,
          LOCATION_Y: -32.31333,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WORCESTER',
          the_geom: 'POINT (19.443730000000016 -33.64546000000003)',
          LOCATION_X: 19.44373,
          LOCATION_Y: -33.64546,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'STRANDFONTEIN',
          the_geom: 'POINT (18.57684000000002 -34.07212000000003)',
          LOCATION_X: 18.57684,
          LOCATION_Y: -34.07212,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MACASSAR',
          the_geom: 'POINT (18.762760000000018 -34.061120000000024)',
          LOCATION_X: 18.76276,
          LOCATION_Y: -34.06112,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OCEAN VIEW',
          the_geom: 'POINT (18.34645000000002 -34.144350000000024)',
          LOCATION_X: 18.34645,
          LOCATION_Y: -34.14435,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NORKEMPARK',
          the_geom: 'POINT (28.22334000000003 -26.054560000000023)',
          LOCATION_X: 28.22334,
          LOCATION_Y: -26.05456,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KATLEHONG NORTH',
          the_geom: 'POINT (28.156766670000028 -26.314697220000024)',
          LOCATION_X: 28.1567666,
          LOCATION_Y: -26.314697,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MARYDALE',
          the_geom: 'POINT (22.10618000000002 -29.406180000000028)',
          LOCATION_X: 22.10618,
          LOCATION_Y: -29.40618,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PETRUSVILLE',
          the_geom: 'POINT (24.658580000000022 -30.07724000000003)',
          LOCATION_X: 24.65858,
          LOCATION_Y: -30.07724,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PHILIPSTOWN',
          the_geom: 'POINT (24.47417000000002 -30.43415000000003)',
          LOCATION_X: 24.47417,
          LOCATION_Y: -30.43415,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRIESKA',
          the_geom: 'POINT (22.740690000000022 -29.672400000000028)',
          LOCATION_X: 22.74069,
          LOCATION_Y: -29.6724,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAOKENG',
          the_geom: 'POINT (27.209980000000023 -27.652230000000024)',
          LOCATION_X: 27.20998,
          LOCATION_Y: -27.65223,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VIERFONTEIN',
          the_geom: 'POINT (26.751870000000025 -27.080040000000025)',
          LOCATION_X: 26.75187,
          LOCATION_Y: -27.08004,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILJOENSKROON',
          the_geom: 'POINT (26.946580000000026 -27.206880000000023)',
          LOCATION_X: 26.94658,
          LOCATION_Y: -27.20688,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WESSELSBRON',
          the_geom: 'POINT (26.363270000000025 -27.856790000000025)',
          LOCATION_X: 26.36327,
          LOCATION_Y: -27.85679,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SANNIESHOF',
          the_geom: 'POINT (25.806440000000023 -26.529250000000022)',
          LOCATION_X: 25.80644,
          LOCATION_Y: -26.52925,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DANIELSKUIL',
          the_geom: 'POINT (23.543060000000022 -28.182390000000023)',
          LOCATION_X: 23.54306,
          LOCATION_Y: -28.18239,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRETORIA CENTRAL',
          the_geom: 'POINT (28.184720000000027 -25.748460000000023)',
          LOCATION_X: 28.18472,
          LOCATION_Y: -25.74846,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ORLANDO',
          the_geom: 'POINT (27.919150000000023 -26.238770000000024)',
          LOCATION_X: 27.91915,
          LOCATION_Y: -26.23877,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELLVILLE SOUTH',
          the_geom: 'POINT (18.646550000000016 -33.91541000000003)',
          LOCATION_X: 18.64655,
          LOCATION_Y: -33.91541,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DURBANVILLE',
          the_geom: 'POINT (18.64929000000002 -33.833890000000025)',
          LOCATION_X: 18.64929,
          LOCATION_Y: -33.83389,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DYSSELSDORP',
          the_geom: 'POINT (22.43460000000002 -33.57618000000003)',
          LOCATION_X: 22.4346,
          LOCATION_Y: -33.57618,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WATERPOORT',
          the_geom: 'POINT (29.62656000000003 -22.90039000000002)',
          LOCATION_X: 29.62656,
          LOCATION_Y: -22.90039,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALLDAYS',
          the_geom: 'POINT (29.104170000000025 -22.68226000000002)',
          LOCATION_X: 29.10417,
          LOCATION_Y: -22.68226,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LEVUBU',
          the_geom: 'POINT (30.275400000000033 -23.09234000000002)',
          LOCATION_X: 30.2754,
          LOCATION_Y: -23.09234,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAKHADO',
          the_geom: 'POINT (29.907730000000026 -23.03789000000002)',
          LOCATION_X: 29.90773,
          LOCATION_Y: -23.03789,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MUSINA',
          the_geom: 'POINT (30.043960000000027 -22.34331000000002)',
          LOCATION_X: 30.04396,
          LOCATION_Y: -22.34331,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GENADENDAL',
          the_geom: 'POINT (19.56280000000002 -34.044810000000034)',
          LOCATION_X: 19.5628,
          LOCATION_Y: -34.04481,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GORDONS BAY',
          the_geom: 'POINT (18.869410000000016 -34.159080000000024)',
          LOCATION_X: 18.86941,
          LOCATION_Y: -34.15908,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SECUNDA',
          the_geom: 'POINT (29.186220000000027 -26.501870000000025)',
          LOCATION_X: 29.18622,
          LOCATION_Y: -26.50187,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BAVIAANSKLOOF',
          the_geom: 'POINT (23.98058000000002 -33.53938000000004)',
          LOCATION_X: 23.98058,
          LOCATION_Y: -33.53938,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TAMARA',
          the_geom: 'POINT (27.283390000000022 -32.97844000000003)',
          LOCATION_X: 27.28339,
          LOCATION_Y: -32.97844,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ALICE',
          the_geom: 'POINT (26.835830000000023 -32.790330000000026)',
          LOCATION_X: 26.83583,
          LOCATION_Y: -32.79033,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MIDDLEDRIFT',
          the_geom: 'POINT (26.990500000000026 -32.81951000000004)',
          LOCATION_X: 26.9905,
          LOCATION_Y: -32.81951,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TOWN HILL',
          the_geom: 'POINT (30.351220000000026 -29.58544000000003)',
          LOCATION_X: 30.35122,
          LOCATION_Y: -29.58544,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WILLISTON',
          the_geom: 'POINT (20.91551000000002 -31.34280000000003)',
          LOCATION_X: 20.91551,
          LOCATION_Y: -31.3428,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOLO',
          the_geom: 'POINT (27.624140000000022 -32.38820000000003)',
          LOCATION_X: 27.62414,
          LOCATION_Y: -32.3882,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UMZINTO',
          the_geom: 'POINT (30.672280000000026 -30.309250000000024)',
          LOCATION_X: 30.67228,
          LOCATION_Y: -30.30925,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MATLALA',
          the_geom: 'POINT (29.03150000000003 -23.674130000000023)',
          LOCATION_X: 29.0315,
          LOCATION_Y: -23.67413,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SENWABARWANA',
          the_geom: 'POINT (29.13931000000003 -23.28572000000002)',
          LOCATION_X: 29.13931,
          LOCATION_Y: -23.28572,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MALEBOHO',
          the_geom: 'POINT (28.831830000000025 -22.89844000000002)',
          LOCATION_X: 28.83183,
          LOCATION_Y: -22.89844,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAHWELERENG',
          the_geom: 'POINT (28.983290000000025 -24.15543000000002)',
          LOCATION_X: 28.98329,
          LOCATION_Y: -24.15543,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GILEAD',
          the_geom: 'POINT (28.656490000000026 -23.48766000000002)',
          LOCATION_X: 28.65649,
          LOCATION_Y: -23.48766,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WITPOORT',
          the_geom: 'POINT (28.006870000000028 -23.33168000000002)',
          LOCATION_X: 28.00687,
          LOCATION_Y: -23.33168,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'JANE FURSE',
          the_geom: 'POINT (29.852810000000026 -24.765000000000025)',
          LOCATION_X: 29.85281,
          LOCATION_Y: -24.765,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ACORNHOEK',
          the_geom: 'POINT (31.048350000000028 -24.597100000000022)',
          LOCATION_X: 31.04835,
          LOCATION_Y: -24.5971,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BUSHBUCKRIDGE',
          the_geom: 'POINT (31.068210000000025 -24.842300000000026)',
          LOCATION_X: 31.06821,
          LOCATION_Y: -24.8423,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HAMMANSKRAAL',
          the_geom: 'POINT (28.275060000000025 -25.404790000000023)',
          LOCATION_X: 28.27506,
          LOCATION_Y: -25.40479,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KAMEELDRIFT',
          the_geom: 'POINT (28.307180000000027 -25.650620000000025)',
          LOCATION_X: 28.30718,
          LOCATION_Y: -25.65062,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PRETORIA NORTH',
          the_geom: 'POINT (28.17400000000003 -25.671330000000022)',
          LOCATION_X: 28.174,
          LOCATION_Y: -25.67133,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CRYSTALPARK',
          the_geom: 'POINT (28.372970000000027 -26.124120000000023)',
          LOCATION_X: 28.37297,
          LOCATION_Y: -26.12412,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PUTFONTEIN',
          the_geom: 'POINT (28.419080000000026 -26.103320000000025)',
          LOCATION_X: 28.41908,
          LOCATION_Y: -26.10332,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ETWATWA',
          the_geom: 'POINT (28.46420000000003 -26.119990000000023)',
          LOCATION_X: 28.4642,
          LOCATION_Y: -26.11999,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZELE',
          the_geom: 'POINT (27.375910000000022 -32.77056000000003)',
          LOCATION_X: 27.37591,
          LOCATION_Y: -32.77056,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MSINGA',
          the_geom: 'POINT (30.441990000000025 -28.74896000000003)',
          LOCATION_X: 30.44199,
          LOCATION_Y: -28.74896,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'INGWAVUMA',
          the_geom: 'POINT (31.99750000000003 -27.133610000000026)',
          LOCATION_X: 31.9975,
          LOCATION_Y: -27.13361,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NONDWENI',
          the_geom: 'POINT (30.804760000000027 -28.199080000000027)',
          LOCATION_X: 30.80476,
          LOCATION_Y: -28.19908,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DANNHAUSER',
          the_geom: 'POINT (30.05658000000003 -28.014410000000026)',
          LOCATION_X: 30.05658,
          LOCATION_Y: -28.01441,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HELPMEKAAR',
          the_geom: 'POINT (30.41937000000003 -28.446670000000022)',
          LOCATION_X: 30.41937,
          LOCATION_Y: -28.44667,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EKUVUKENI',
          the_geom: 'POINT (30.153650000000027 -28.46180000000003)',
          LOCATION_X: 30.15365,
          LOCATION_Y: -28.4618,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HLUHLUWE',
          the_geom: 'POINT (32.26855000000003 -28.020340000000022)',
          LOCATION_X: 32.26855,
          LOCATION_Y: -28.02034,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'RABIE RIDGE',
          the_geom: 'POINT (28.170650000000023 -26.020600000000027)',
          LOCATION_X: 28.17065,
          LOCATION_Y: -26.0206,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BOONS',
          the_geom: 'POINT (27.236710000000024 -25.966870000000025)',
          LOCATION_X: 27.23671,
          LOCATION_Y: -25.96687,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KOSTER',
          the_geom: 'POINT (26.897480000000023 -25.865020000000023)',
          LOCATION_X: 26.89748,
          LOCATION_Y: -25.86502,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MHLUZI',
          the_geom: 'POINT (29.44880000000003 -25.750750000000025)',
          LOCATION_X: 29.4488,
          LOCATION_Y: -25.75075,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PILGRIMS REST',
          the_geom: 'POINT (30.75640000000003 -24.909980000000022)',
          LOCATION_X: 30.7564,
          LOCATION_Y: -24.90998,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'CHARL CILLIERS',
          the_geom: 'POINT (29.187500000000025 -26.659760000000023)',
          LOCATION_X: 29.1875,
          LOCATION_Y: -26.65976,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DURBAN NORTH',
          the_geom: 'POINT (31.04827000000003 -29.777320000000028)',
          LOCATION_X: 31.04827,
          LOCATION_Y: -29.77732,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GREENWOOD PARK',
          the_geom: 'POINT (31.02431000000003 -29.785530000000023)',
          LOCATION_X: 31.02431,
          LOCATION_Y: -29.78553,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KWADUKUZA',
          the_geom: 'POINT (31.28430000000003 -29.347190000000023)',
          LOCATION_X: 31.2843,
          LOCATION_Y: -29.34719,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NORWOOD',
          the_geom: 'POINT (28.078330000000022 -26.161200000000026)',
          LOCATION_X: 28.07833,
          LOCATION_Y: -26.1612,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PARKVIEW',
          the_geom: 'POINT (28.026570000000028 -26.159510000000022)',
          LOCATION_X: 28.02657,
          LOCATION_Y: -26.15951,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'YEOVILLE',
          the_geom: 'POINT (28.062810000000027 -26.182900000000025)',
          LOCATION_X: 28.06281,
          LOCATION_Y: -26.1829,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KEISKAMMAHOEK',
          the_geom: 'POINT (27.145460000000025 -32.68017000000003)',
          LOCATION_X: 27.14546,
          LOCATION_Y: -32.68017,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BALFOUR',
          the_geom: 'POINT (26.676520000000025 -32.536280000000026)',
          LOCATION_X: 26.67652,
          LOCATION_Y: -32.53628,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PEDDIE',
          the_geom: 'POINT (27.114460000000026 -33.19855000000003)',
          LOCATION_X: 27.11446,
          LOCATION_Y: -33.19855,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'BELL',
          the_geom: 'POINT (27.359530000000024 -33.247440000000026)',
          LOCATION_X: 27.35953,
          LOCATION_Y: -33.24744,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DINGLETON',
          the_geom: 'POINT (22.982980000000023 -27.784130000000022)',
          LOCATION_X: 22.98298,
          LOCATION_Y: -27.78413,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MELKBOSSTRAND',
          the_geom: 'POINT (18.448100000000018 -33.72733000000003)',
          LOCATION_X: 18.4481,
          LOCATION_Y: -33.72733,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ATLANTIS',
          the_geom: 'POINT (18.493180000000017 -33.56479000000002)',
          LOCATION_X: 18.49318,
          LOCATION_Y: -33.56479,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TABLE BAY HARBOUR',
          the_geom: 'POINT (18.424540000000018 -33.91001000000003)',
          LOCATION_X: 18.42454,
          LOCATION_Y: -33.91001,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WYNBERG',
          the_geom: 'POINT (18.465050000000016 -34.00399000000004)',
          LOCATION_X: 18.46505,
          LOCATION_Y: -34.00399,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZEBEDIELA',
          the_geom: 'POINT (29.244060000000026 -24.29829000000002)',
          LOCATION_X: 29.24406,
          LOCATION_Y: -24.29829,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SAAMBOUBRUG',
          the_geom: 'POINT (28.584810000000022 -22.56206000000002)',
          LOCATION_X: 28.58481,
          LOCATION_Y: -22.56206,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VENTERSDORP',
          the_geom: 'POINT (26.821220000000025 -26.317360000000022)',
          LOCATION_X: 26.82122,
          LOCATION_Y: -26.31736,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TZANEEN',
          the_geom: 'POINT (30.16194000000003 -23.82788000000002)',
          LOCATION_X: 30.16194,
          LOCATION_Y: -23.82788,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HOWICK',
          the_geom: 'POINT (30.229970000000026 -29.48850000000003)',
          LOCATION_X: 30.22997,
          LOCATION_Y: -29.4885,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SIYABUSWA',
          the_geom: 'POINT (29.050240000000027 -25.112590000000022)',
          LOCATION_X: 29.05024,
          LOCATION_Y: -25.11259,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEUNINGSPRUIT',
          the_geom: 'POINT (27.423030000000022 -27.448890000000024)',
          LOCATION_X: 27.42303,
          LOCATION_Y: -27.44889,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOFFATVIEW',
          the_geom: 'POINT (28.088771000000023 -26.241530000000022)',
          LOCATION_X: 28.088771,
          LOCATION_Y: -26.24153,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HARTBEESPOORTDAM',
          the_geom: 'POINT (27.871590000000026 -25.724470000000025)',
          LOCATION_X: 27.87159,
          LOCATION_Y: -25.72447,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ST FRANCIS BAY',
          the_geom: 'POINT (24.826730000000023 -34.16691000000003)',
          LOCATION_X: 24.82673,
          LOCATION_Y: -34.16691,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KUYASA',
          the_geom: 'POINT (25.10707000000002 -30.719080000000027)',
          LOCATION_X: 25.10707,
          LOCATION_Y: -30.71908,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'OLIEVENHOUTBOSCH',
          the_geom: 'POINT (28.095500000000026 -25.917600000000025)',
          LOCATION_X: 28.0955,
          LOCATION_Y: -25.9176,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NOTTINGHAM ROAD',
          the_geom: 'POINT (29.99044000000003 -29.351320000000026)',
          LOCATION_X: 29.99044,
          LOCATION_Y: -29.35132,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MEYERTON',
          the_geom: 'POINT (28.014920000000025 -26.555670000000024)',
          LOCATION_X: 28.01492,
          LOCATION_Y: -26.55567,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KLIPRIVIER',
          the_geom: 'POINT (28.084520000000023 -26.420270000000023)',
          LOCATION_X: 28.08452,
          LOCATION_Y: -26.42027,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'THE BARRAGE',
          the_geom: 'POINT (27.679500000000026 -26.764530000000025)',
          LOCATION_X: 27.6795,
          LOCATION_Y: -26.76453,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MUDEN',
          the_geom: 'POINT (30.367480000000025 -28.974670000000025)',
          LOCATION_X: 30.36748,
          LOCATION_Y: -28.97467,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ELANDSLAAGTE',
          the_geom: 'POINT (29.95880000000003 -28.401290000000024)',
          LOCATION_X: 29.9588,
          LOCATION_Y: -28.40129,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOOI RIVER',
          the_geom: 'POINT (29.992160000000023 -29.212210000000027)',
          LOCATION_X: 29.99216,
          LOCATION_Y: -29.21221,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EMATSHENI',
          the_geom: 'POINT (29.155500000000025 -28.698080000000026)',
          LOCATION_X: 29.1555,
          LOCATION_Y: -28.69808,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'UPPER TUGELA',
          the_geom: 'POINT (29.15404000000003 -28.810180000000027)',
          LOCATION_X: 29.15404,
          LOCATION_Y: -28.81018,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'WINTERTON',
          the_geom: 'POINT (29.540160000000025 -28.814430000000026)',
          LOCATION_X: 29.54016,
          LOCATION_Y: -28.81443,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GRASSY PARK',
          the_geom: 'POINT (18.495230000000017 -34.04863000000003)',
          LOCATION_X: 18.49523,
          LOCATION_Y: -34.04863,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HAENERTSBURG',
          the_geom: 'POINT (29.94050000000003 -23.940730000000023)',
          LOCATION_X: 29.9405,
          LOCATION_Y: -23.94073,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TEMBISA SOUTH',
          the_geom: 'POINT (28.20887600000003 -26.025975000000024)',
          LOCATION_X: 28.208876,
          LOCATION_Y: -26.025975,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VILLIERIA',
          the_geom: 'POINT (28.245436000000026 -25.718203000000024)',
          LOCATION_X: 28.245436,
          LOCATION_Y: -25.718203,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ROOSSENEKAL',
          the_geom: 'POINT (29.92706000000003 -25.198190000000025)',
          LOCATION_X: 29.92706,
          LOCATION_Y: -25.19819,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VAN STADENSRUS',
          the_geom: 'POINT (27.016340000000024 -29.987400000000033)',
          LOCATION_X: 27.01634,
          LOCATION_Y: -29.9874,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LUCKHOFF',
          the_geom: 'POINT (24.789950000000022 -29.751500000000032)',
          LOCATION_X: 24.78995,
          LOCATION_Y: -29.7515,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HENNENMAN',
          the_geom: 'POINT (27.027480000000022 -27.979130000000026)',
          LOCATION_X: 27.02748,
          LOCATION_Y: -27.97913,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'NYANGA',
          the_geom: 'POINT (18.583420000000018 -33.988960000000034)',
          LOCATION_X: 18.58342,
          LOCATION_Y: -33.98896,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'ZAAIPLAAS',
          the_geom: 'POINT (29.751240000000028 -25.166110000000025)',
          LOCATION_X: 29.75124,
          LOCATION_Y: -25.16611,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MOTETEMA',
          the_geom: 'POINT (29.464400000000026 -25.098900000000025)',
          LOCATION_X: 29.4644,
          LOCATION_Y: -25.0989,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEKHUKHUNE',
          the_geom: 'POINT (30.01560000000003 -24.752170000000024)',
          LOCATION_X: 30.0156,
          LOCATION_Y: -24.75217,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TUBATSE',
          the_geom: 'POINT (30.322970000000026 -24.581430000000022)',
          LOCATION_X: 30.32297,
          LOCATION_Y: -24.58143,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SEBENZA',
          the_geom: 'POINT (28.18190000000003 -26.132500000000025)',
          LOCATION_X: 28.1819,
          LOCATION_Y: -26.1325,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'REIGERPARK',
          the_geom: 'POINT (28.225450000000027 -26.229760000000024)',
          LOCATION_X: 28.22545,
          LOCATION_Y: -26.22976,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'TONGAAT',
          the_geom: 'POINT (31.115180000000027 -29.57310000000003)',
          LOCATION_X: 31.11518,
          LOCATION_Y: -29.5731,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'SYDENHAM',
          the_geom: 'POINT (30.97629000000003 -29.831280000000028)',
          LOCATION_X: 30.97629,
          LOCATION_Y: -29.83128,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'VICTORIA WEST',
          the_geom: 'POINT (23.11399000000002 -31.40416000000003)',
          LOCATION_X: 23.11399,
          LOCATION_Y: -31.40416,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DAVEL',
          the_geom: 'POINT (29.667660000000023 -26.447900000000025)',
          LOCATION_X: 29.66766,
          LOCATION_Y: -26.4479,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'LOTHAIR',
          the_geom: 'POINT (30.440330000000024 -26.390720000000023)',
          LOCATION_X: 30.44033,
          LOCATION_Y: -26.39072,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'MAHAMBA',
          the_geom: 'POINT (31.06790000000003 -27.104840000000028)',
          LOCATION_X: 31.0679,
          LOCATION_Y: -27.10484,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'GA-RANKUWA',
          the_geom: 'POINT (27.999010000000027 -25.599730000000022)',
          LOCATION_X: 27.99901,
          LOCATION_Y: -25.59973,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'HEBRON',
          the_geom: 'POINT (28.017140000000026 -25.549380000000024)',
          LOCATION_X: 28.01714,
          LOCATION_Y: -25.54938,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PABALELLO',
          the_geom: 'POINT (21.222100000000022 -28.443860000000026)',
          LOCATION_X: 21.2221,
          LOCATION_Y: -28.44386,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'PAARL',
          the_geom: 'POINT (18.969160000000016 -33.738540000000036)',
          LOCATION_X: 18.96916,
          LOCATION_Y: -33.73854,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'DARLING',
          the_geom: 'POINT (18.381990000000016 -33.37637000000003)',
          LOCATION_X: 18.38199,
          LOCATION_Y: -33.37637,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'EENDEKUIL',
          the_geom: 'POINT (18.88200000000002 -32.689400000000035)',
          LOCATION_X: 18.882,
          LOCATION_Y: -32.6894,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        },
        {
          name: 'KIRSTENHOF',
          the_geom: 'POINT (18.455240000000018 -34.072190000000035)',
          LOCATION_X: 18.45524,
          LOCATION_Y: -34.07219,
          CREATE_DT: 20140207,
          VERSION: '1.1.0'
        }
      ],
      select: []
    }
  }
}
</script>
