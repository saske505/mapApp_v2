<template>
  <div>
    <v-jumbotron color="grey lighten-2" style="height:155px!important;">
     <v-container>
       <v-layout align-center>
         <v-flex>
           <h3 class="display-3">{{ formTitle }}</h3>
         </v-flex>
       </v-layout>
     </v-container>
   </v-jumbotron>
  <v-dialog v-model="dialog" max-width="500px">
    <v-btn color="primary" dark slot="activator" class="mb-2">{{ formTitle }}</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field label="name" name="name" v-model="item.incident.name"></v-text-field>
              <v-select
              :items="this.catagories"
              cache-items
              item-value="name"
              item-text="name"
              v-model="item.incident.type"
              label="Crime type:"
              hide-details
              id="type"
              name="type"
              ></v-select>
              <app-select v-model="item.location.reportedPoliceStationName"></app-select>
              <v-text-field label="address" name="address" v-model="item.location.address"></v-text-field>
              <v-text-field label="lat" name="lat" v-model="item.location.lat"></v-text-field>
              <v-text-field label="long" name="long" v-model="item.location.long"></v-text-field>
              <v-text-field label="city" name="city" v-model="item.location.city"></v-text-field>
              <v-text-field label="area" name="area" v-model="item.location.area"></v-text-field>
              <v-text-field multi-line label="description" name="description" v-model="item.incident.description"></v-text-field>
              <v-text-field label="officer" name="offcer" v-model="item.incident.offcer"></v-text-field>
              <v-text-field label="rating" name="rating" v-model="item.incident.rating"></v-text-field>
              <v-text-field label="record Number" name="recordNumber" v-model="item.incident.recordNumber"></v-text-field>
              <v-text-field label="date" name="date" v-model="item.incident.date"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat  @click.native="createItem">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
       <td>{{ props.item.name }}</td>
       <td class="text-xs-right">{{ props.item.type }}</td>
       <td class="text-xs-right">{{ props.item.location.reportedPoliceStationName }}</td>
       <td class="text-xs-right">{{ props.item.incident.rating }}</td>
       <td class="text-xs-right">{{ props.item.incident.date }}</td>
       <td class="justify-center layout px-0">
         <v-btn icon class="mx-0" @click="editItem(props.item)">
           <v-icon color="teal">edit</v-icon>
         </v-btn>
         <v-btn icon class="mx-0" @click="deleteItem(props.item)">
           <v-icon color="pink">delete</v-icon>
         </v-btn>
       </td>
     </template>
    <template slot="no-data">
      <v-btn color="primary">Reset</v-btn>
    </template>
  </v-data-table>
</div>
</template>

<script>
import qs from 'query-string'
import stationSelect from '../shared/select'

export default {
  components: {
    'app-select': stationSelect
  },
  data: function () {
    return {
      name: '',
      dialog: false,
      headers: [
        {
          text: '',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Incident type', value: 'incidentType' }
      ],
      items: [],
      select: [],
      updateId: '',
      editedIndex: -1,
      item: {
        location: {
          reportedPoliceStationName: '',
          address: '',
          lat: '',
          long: '',
          city: '',
          area: ''
        },
        incident: {
          name: '',
          type: '',
          description: '',
          offcer: [],
          rating: '',
          recordNumber: '',
          date: ''
        }
      },
      action: 'New item',
      update_id: '',
      backup: {}
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    catagories () {
      return this.$store.getters.loadedCatagories
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    getItems: function () {
      this.axios.get('http://localhost:3000/crud/read', {
        header: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then((resp) => {
        this.items = resp.data
      })
    },
    createItem: function () {
      var obj = {
        'name': this.item.incident.name,
        'type': this.item.incident.type,
        'reportedPoliceStationName': this.item.location.reportedPoliceStationName,
        'locationAddress': this.item.location.address,
        'locationLat': this.item.location.lat,
        'locationLong': this.item.location.long,
        'locationCity': this.item.location.city,
        'locationArea': this.item.location.area,
        'incidentDescription': this.item.incident.description,
        'incidentRating': this.item.incident.rating,
        'incidentDate': this.item.incident.date,
        'incidentrecordNumber': this.item.incident.recordNumber
      }
      var strngObj = qs.stringify(obj)
      this.axios.post('http://localhost:3000/crud/insert',
        strngObj, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then((resp) => {
        if (resp.data.log === 'insert success !') {
          this.items.push(resp.data.data)
          alert(resp.data.log)
        }
        console.log(resp.data) // check full object in browser console log
      })
    },
    updateItem: function () {
      var objUpdate = {
        'name': this.item.incident.name,
        'type': this.item.incident.type,
        'reportedPoliceStationName': this.item.location.reportedPoliceStationName,
        'locationAddress': this.item.location.address,
        'locationLat': this.item.location.lat,
        'locationLong': this.item.location.long,
        'locationCity': this.item.location.city,
        'locationArea': this.item.location.area,
        'incidentDescription': this.item.incident.description,
        'incidentRating': this.item.incident.rating,
        'incidentDate': this.item.incident.date,
        'incidentrecordNumber': this.item.incident.recordNumber
      }
      var strngObj = qs.stringify(objUpdate)
      var index = this.items.indexOf(this.backup) // search object in array by using backup object in function setUpdate
      this.axios.put('http://localhost:3000/crud/update/' + this.update_id,
        strngObj, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then((resp) => {
        if (resp.data.log === 'update success !') {
          this.items[index].name = objUpdate.name
          this.items[index].type = objUpdate.name
          this.items[index].location.address = objUpdate.name
          this.items[index].location.lat = objUpdate.name
          this.items[index].location.long = objUpdate.name
          this.items[index].location.city = objUpdate.name
          this.items[index].location.area = objUpdate.name
          this.items[index].incident.description = objUpdate.name
          this.items[index].incident.officer = objUpdate.name
          this.items[index].incident.rating = objUpdate.name
          this.items[index].incident.recordNumber = objUpdate.name
          this.items[index].incident.date = objUpdate.name
          alert(resp.data.log)
          // console.log(resp.data.log)
        }
      })
    },
    setUpdate: function (e) { // setting when we click edit, put data to parame to update
      this.action = 'Update item ' + e.name
      this.update_id = e._id
      this.name = e.name
      this.dob = e.dob
      this.gender = e.gender
      this.backup = e
    },
    remove: function (e) { // setting when we click edit, put data to parame to update
      this.axios.delete('http://localhost:3000/crud/delete/' + e._id, { id: e._id }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      // emulateJSON: true // fix cannot post as form data and urlencoded
      ).then((resp) => {
        var index = this.items.indexOf(e)
        this.items.splice(index, 1)
        // alert(resp.data.log)
        console.log(index)
        console.log(e)
      })
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    }
  },
  created: function () {
    this.getItems() // method1 will execute at pageload
  }
}
</script>
