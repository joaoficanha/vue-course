<template>
      <div class="admin-pages">
        <app-page-title title="System Administration" subtitle="Articles, Categories & Users" icon="fa fa-cogs"/>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab v-for="page in pages" :key="page.title" :active="currentTab" :title="page.title">
                        <component :is="page.component"/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import pages from "./constants/pages";

import PageTitle from "../layout/PageTitle";

export default {
  name: "app-admin",
  components: {
    "app-page-title": PageTitle,
  },
  data() {
    return {
      pages,
      currentTab: null,
    };
  },
};
</script>

<style>
</style>
