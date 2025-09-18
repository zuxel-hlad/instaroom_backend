<template>
  <div>
    <q-select
      emit-value
      map-options
      option-value="value"
      class="col-12 col-sm-4 col-lg-2"
      option-label="label"
      :model-value="placementStore.selectedSort"
      :label="t('placement.sort.label')"
      :options="SORT_OPTIONS"
    />
    <div class="row items-center q-gutter-x-xs q-mx-md">
      <q-btn
        unelevated
        icon="keyboard_arrow_up"
        class="q-px-xs sort-btn text-caption"
        text-color="dark"
        :color="placementStore.selectedSortType === SortType.ASC ? 'grey-4' : 'white'"
        @click="placementStore.selectedSortType = SortType.ASC"
      />
      <q-btn
        unelevated
        icon="keyboard_arrow_down"
        class="q-px-xs sort-btn text-caption"
        text-color="dark"
        :color="placementStore.selectedSortType === SortType.DESC ? 'grey-4' : 'white'"
        @click="placementStore.selectedSortType = SortType.DESC"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SortValue {
  DEFAULT = '',
  PASS_TIME = 'PASS_TIME',
  STOP = 'STOP',
}

export const SORT_OPTIONS = [
  {
    value: SortValue.DEFAULT,
    label: t('placement.sort.default'),
  },
  {
    value: SortValue.PASS_TIME,
    label: t('placement.sort.passengerTime'),
  },
  {
    value: SortValue.STOP,
    label: t('placement.sort.stop'),
  },
] as const;
</script>

<style lang="" scoped></style>
