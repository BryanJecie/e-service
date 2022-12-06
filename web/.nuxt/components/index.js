export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HorizontalMenu } from '../..\\components\\horizontal-menu.js'
export { default as HorizontalNavbar } from '../..\\components\\Horizontal-navbar.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Menu } from '../..\\components\\menu.js'
export { default as PageHeader } from '../..\\components\\Page-header.vue'
export { default as Portlet } from '../..\\components\\Portlet.vue'
export { default as Rightbar } from '../..\\components\\Rightbar.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as Topbar } from '../..\\components\\Topbar.vue'
export { default as TwoColumnSidebar } from '../..\\components\\Two-column-sidebar.vue'
export { default as WidgetsCampaigns } from '../..\\components\\widgets\\Campaigns.vue'
export { default as WidgetsChat } from '../..\\components\\widgets\\Chat.vue'
export { default as WidgetsCrmWidget } from '../..\\components\\widgets\\Crm-widget.vue'
export { default as WidgetsInbox } from '../..\\components\\widgets\\Inbox.vue'
export { default as WidgetsMarketingReports } from '../..\\components\\widgets\\Marketing-reports.vue'
export { default as WidgetsProductsSales } from '../..\\components\\widgets\\Products-sales.vue'
export { default as WidgetsProjections } from '../..\\components\\widgets\\Projections.vue'
export { default as WidgetsRecentLeads } from '../..\\components\\widgets\\Recent-leads.vue'
export { default as WidgetsRevenueHistory } from '../..\\components\\widgets\\Revenue-history.vue'
export { default as WidgetsRevenueReport } from '../..\\components\\widgets\\Revenue-report.vue'
export { default as WidgetsRevenue } from '../..\\components\\widgets\\Revenue.vue'
export { default as WidgetsTodo } from '../..\\components\\widgets\\Todo.vue'
export { default as WidgetsTopPerforming } from '../..\\components\\widgets\\Top-performing.vue'
export { default as WidgetsWidgetChart } from '../..\\components\\widgets\\Widget-chart.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
