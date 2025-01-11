import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type PageRenderedOnProps = {
  pageRenderedOn: "build" | "periodically" | "request";
};

type DataFetchedOnProps = {
  dataFetchedOn: "build" | "periodically" | "request" | "n/a";
};

type DataCachedProps = {
  dataCached: "yes" | "no" | "n/a";
};

type DataCacheInvalidatedProps = {
  dataCacheInvalidated:
    | "never"
    | "on-demand"
    | "periodically"
    | "mixed"
    | "n/a";
};

export type PageAttributesProps = PageRenderedOnProps &
  DataFetchedOnProps &
  DataCachedProps &
  DataCacheInvalidatedProps;

const activeOptionClassName = "font-bold text-blue-500";
const inactiveOptionClassName = "text-gray-500";

export default function PageAttributes(props: PageAttributesProps) {
  const { pageRenderedOn, dataFetchedOn, dataCached, dataCacheInvalidated } =
    props;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">Page Attributes</div>
            </div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc pl-5 text-sm">
            <li>
              <PageRenderedOn pageRenderedOn={pageRenderedOn} />
            </li>
            <li>
              <DataFetchedOn dataFetchedOn={dataFetchedOn} />
            </li>
            <li>
              <DataCached dataCached={dataCached} />
            </li>
            <li>
              <DataCacheInvalidated
                dataCacheInvalidated={dataCacheInvalidated}
              />
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

const PageRenderedOn = (props: PageRenderedOnProps) => {
  const { pageRenderedOn } = props;
  const buildClassName =
    pageRenderedOn === "build"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const periodicallyClassName =
    pageRenderedOn === "periodically"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const requestClassName =
    pageRenderedOn === "request"
      ? activeOptionClassName
      : inactiveOptionClassName;

  return (
    <>
      Page rendered on: <span className={buildClassName}>build</span> |{" "}
      <span className={periodicallyClassName}>periodically</span> |{" "}
      <span className={requestClassName}>request</span>
    </>
  );
};

const DataFetchedOn = (props: DataFetchedOnProps) => {
  const { dataFetchedOn } = props;
  const buildClassName =
    dataFetchedOn === "build" ? activeOptionClassName : inactiveOptionClassName;
  const periodicallyClassName =
    dataFetchedOn === "periodically"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const requestClassName =
    dataFetchedOn === "request"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const n_aClassName =
    dataFetchedOn === "n/a" ? activeOptionClassName : inactiveOptionClassName;

  return (
    <>
      Data fetched on: <span className={buildClassName}>build</span> |{" "}
      <span className={periodicallyClassName}>periodically</span> |{" "}
      <span className={requestClassName}>request</span> |{" "}
      <span className={n_aClassName}>n/a</span>
    </>
  );
};

const DataCached = (props: DataCachedProps) => {
  const { dataCached } = props;
  const yesClassName =
    dataCached === "yes" ? activeOptionClassName : inactiveOptionClassName;
  const noClassName =
    dataCached === "no" ? activeOptionClassName : inactiveOptionClassName;
  const n_aClassName =
    dataCached === "n/a" ? activeOptionClassName : inactiveOptionClassName;

  return (
    <>
      Data cached: <span className={yesClassName}>yes</span> |{" "}
      <span className={noClassName}>no</span> |{" "}
      <span className={n_aClassName}>n/a</span>
    </>
  );
};

const DataCacheInvalidated = (props: DataCacheInvalidatedProps) => {
  const { dataCacheInvalidated } = props;
  const neverClassName =
    dataCacheInvalidated === "never"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const on_demandClassName =
    dataCacheInvalidated === "on-demand" || dataCacheInvalidated === "mixed"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const periodicallyClassName =
    dataCacheInvalidated === "periodically" || dataCacheInvalidated === "mixed"
      ? activeOptionClassName
      : inactiveOptionClassName;
  const n_aClassName =
    dataCacheInvalidated === "n/a"
      ? activeOptionClassName
      : inactiveOptionClassName;

  return (
    <>
      Data cache invalidated: <span className={neverClassName}>never</span> |{" "}
      <span className={on_demandClassName}>on-demand</span> |{" "}
      <span className={periodicallyClassName}>periodically</span> |{" "}
      <span className={n_aClassName}>n/a</span>
    </>
  );
};
