# 📊 Demographics

**🌍 Attendee Geography**
<ChoroplethMap
    :geojson="geojson"
    :data="pyDepartmentsData"
    titleKey="department_name"
    geojsonIdKey="dpto"
    idKey="department_id"
    :value="value"
    :extraValues="extraValues"
    :center="center"
    :colorScale="colorScale"
    mapStyle="height: 500px;"
    :zoom="6"
    :mapOptions="mapOptions">
    <template scope="props">
        <InfoControl
            :item="props.currentItem"
            :unit="props.unit"
            title="Department"
            placeholder="Hover over a department"
            position="topright">
        </InfoControl>
        <ReferenceChart
            title="Girls school enrolment"
            :colorScale="colorScale"
            :min="props.min"
            :max="props.max"
            position="bottomright">
        </ReferenceChart>
    </template>
</ChoroplethMap>
**History of Science Society Membership**

::: tip
History of Science Society members receive reduced registration fees, subscriptions to *Isis* and *Osiris*, access to the History of Science and Technology database, and more. [Join now](https://www.press.uchicago.edu/ucp/journals/subscribe/isis.html)
:::

<membershipAttendance2019 class="graph" />

<attendeeFirstTime class="graph" />

<attendeeGender class="graph" />

<attendeeRaceEthnicity class="graph" />

<attendeeEmployment class="graph" />
<script>

</script>